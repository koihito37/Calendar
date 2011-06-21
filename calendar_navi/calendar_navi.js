$.Controller('Ipark.Calendar.Navi',
    {
        defaults :  {
            today :  0,
            date: 0
        },
        listensTo : ['changeDate']
    },
    {
        init: function() {

            this.options.date = this.options.today.newDate();
        },

        'changeDate': function (element, event, date) {
            this.options.date = date;
            this.changeMonth(element);
        },

        '.today click': function(element, event) {
            this.options.date = this.options.today.newDate();
            this.changeMonth(element);
        },

        '.last_month click': function(element, event) {
            this.options.date.add(-1, 'm');
            this.changeMonth(element);
        },

        '.next_month click': function(element, event) {
            this.options.date.add(1, 'm');
            this.changeMonth(element);
        },

        changeMonth: function(element) {
            var content_td = element.parents(".calendar").find('td.content');
            var days_div = element.parents(".calendar").find('div.days');

            content_td.ipark_calendar_month('destroy');
            days_div.ipark_calendar_events('destroy');
            content_td.ipark_calendar_month({
                baseDate: this.options.date
            });
            $(".sidebar").ipark_calendar_sidebar().trigger('changeDate', this.options.date);
        }
    })