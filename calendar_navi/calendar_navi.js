$.Controller('Ipark.Calendar.Navi',{
    '.today click': function(element, event) {
        this.changeMonth(element, 0);
    },

    '.last_month click': function(element, event) {
        this.changeMonth(element, -1);
    },

    '.next_month click': function(element, event) {
        this.changeMonth(element, 1);
    },

    changeMonth: function(element, add_month) {
        var content_td = element.parents(".calendar").find('td.content');
        var days_div = element.parents(".calendar").find('div.days');

        if(add_month != 0) {
            add_month += content_td.controller().options.add_month;
        }

        content_td.ipark_calendar_month('destroy');
        days_div.ipark_calendar_events('destroy');
        content_td.ipark_calendar_month({'add_month': add_month});
    }
})