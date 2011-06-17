$.Model('Ipark.Models.Day',{
    /**
         * Retrieves recipes data from your backend services.
         * @param {Object} params params that might refine your results.
         * @param {Function} success a callback function that returns wrapped recipe objects.
         * @param {Function} error a callback function for an error in the ajax request.
         */
    findAll: function( params, success, error ){
        $.ajax({
            url: '/events',
            type: 'get',
            dataType: 'json',
            data: params,
            success: this.callback(['wrapMany',success]),
            error: error,
            fixture: "//calendar/fixtures/days.json.get" //calculates the fixture path from the url and type.
        });
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