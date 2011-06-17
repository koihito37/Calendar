$.Model('Ipark.Models.Day',{
    /**
         * Retrieves recipes data from your backend services.
         * @param {Object} params params that might refine your results.
         * @param {Function} success a callback function that returns wrapped recipe objects.
         * @param {Function} error a callback function for an error in the ajax request.
         */
    findAll: function( params, success, error ){

        success(this.models(this.calculateDaysOfMonth(params.baseDate)));
        return;
    },

    calculateDaysOfMonth: function(baseDate) {
        // hole den ersten des Monats und setze das start_date darauf
        var startDate = baseDate.newDate(baseDate.year(), baseDate.month(), 1);

        // nehme den letzten Tag des Monats und setze das end_date darauf
        var endDate = baseDate.newDate(baseDate.year(), baseDate.month(), baseDate.daysInMonth());

        // prüfe ob der erste ein Montag ist, wenn nicht gehe zum ersten
        // und setze das startDate darauf
        var day_of_week = startDate.dayOfWeek();
        if(day_of_week != 1){
            if(day_of_week == 0) {
                day_of_week = 7;
            }
            startDate.add(-(day_of_week-1), 'd');
        }

        // prüfe, ob der letzte Tag ein Sonntag ist, wenn nicht gehe zum
        // nächsten Sonntag und setze das endDate darauf
        day_of_week = endDate.dayOfWeek();
        if(day_of_week != 0){
            endDate.add(7-day_of_week, 'd');
        }

        // durchlaufe vom startD zum endDate und erstelle ein array mit date objekten
        var calculatedDate = startDate

        var dates = [];
        while(calculatedDate.compareTo(endDate) < 1) {
            calculatedDate.id = calculatedDate.formatDate('yyyymmdd');
            dates.push(calculatedDate);
            calculatedDate = calculatedDate.newDate();
            calculatedDate = calculatedDate.add(1, 'd');
        }

        return dates;
    }
},{


    getDate: function() {
        var tmp = this.id + "";
        var year = tmp.substr(0,4);
        var month = tmp.substr(4,2);
        var day = tmp.substr(6,2);
        return day+"."+month+"."+year;
    }
});