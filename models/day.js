$.Model('Ipark.Models.Day',{
    /**
         * Retrieves recipes data from your backend services.
         * @param {Object} params params that might refine your results.
         * @param {Function} success a callback function that returns wrapped recipe objects.
         * @param {Function} error a callback function for an error in the ajax request.
         */
    findAll: function( params, success, error ){
        this.calculateDaysOfMonth();
        var fixture = '//calendar/fixtures/days_'+params.month+'.json.get';
        $.ajax({
            url: '/events',
            type: 'get',
            dataType: 'json',
            data: {},
            success: this.callback(['wrapMany',success]),
            error: error,
            fixture: fixture //calculates the fixture path from the url and type.
        });
    },

    calculateDaysOfMonth: function() {
        var calendar = $.calendars.instance();
        console.log(calendar);
        console.log(calendar.today());
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