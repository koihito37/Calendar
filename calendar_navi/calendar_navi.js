$.Controller('Ipark.Calendar.Navi',{
    '.today click': function(element, event) {
        this.changeMonth(element, 'current');
    },

    '.last_month click': function(element, event) {
        alert('last');
    },

    '.next_month click': function(element, event) {
        this.changeMonth(element, 'next');
    },

    changeMonth: function(element, direction) {
        var content_td = element.parents(".calendar").find('td.content');
        var days_div = element.parents(".calendar").find('div.days');

        content_td.ipark_calendar_month('destroy');
        days_div.ipark_calendar_events('destroy');
        content_td.ipark_calendar_month({'month': direction});
    }
})