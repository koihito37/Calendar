steal.plugins(
    'jquery/controller',
    'jquery/view/ejs').then(function($){

    $.Controller('Ipark.Calendar.Month',
    {
        defaults :  {
            add_month :  0
        }
    },
    {
        // sets up the widget
        init : function(){
            var baseDate = $.calendars.instance().newDate();
            baseDate.add(this.options.add_month, 'm');
            Ipark.Models.Day.findAll({baseDate: baseDate}, this.callback('build_days'));
        },

        /**
     * @param {Array} days An array of Ipark.Models.Day objects.
     */
        build_days: function( days ){
            this.find('div.days').html('//calendar/calendar_month/views/days.ejs', {
                days:days, today:$.calendars.instance().newDate()
            });
            this.find('.day').addClass('ui-state-default');
            this.find('div.days').ipark_calendar_events();
        },

        getAddMonth: function() {
            return this.options.add_month;
        },

        '.day .header mouseover': function(element, event){
            element.addClass('ui-state-hover');
            element.closest('.day').addClass('ui-state-hover');
            event.stopPropagation();
        },

        '.day .header mouseout': function(element, event){
            element.removeClass('ui-state-hover');
            element.closest('.day').removeClass('ui-state-hover');
            event.stopPropagation();
        },

        '.day .content mouseover': function(element, event){
            element.addClass('ui-state-hover');
            event.stopPropagation();
        },

        '.day .content mouseout': function(element, event){
            element.removeClass('ui-state-hover');
            event.stopPropagation();
        },

        '.header click': function(element, event) {
            var parent = element.parent();
            var trigger_event = 'add';
            if(parent.hasClass('ui-state-active')) {
                trigger_event = 'remove';
            }
            var date = $.calendars.instance().parseDate('dd.mm.yyyy', parent.data('date'));
            $('.selected-days').trigger(trigger_event, date);
            parent.toggleClass('ui-state-active');
        }
    });
});