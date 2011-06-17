steal.plugins(
    'jquery/controller',
    'jquery/view/ejs').then(function($){

    $.Controller('Ipark.Calendar.Month',{

        // sets up the widget
        init : function(){
            Ipark.Models.Day.findAll({}, this.callback('build_days'));
        },

        /**
         * @param {Array} days An array of Ipark.Models.Day objects.
         */
        build_days: function( days ){
            this.find('.days').html('//calendar/calendar_month/views/days.ejs', {
                days:days
            });
            this.find('.day').addClass('ui-state-default');
            this.find('.days').ipark_calendar_events();
        },

        '.header click': function(element, event) {
            var parent = element.parent();
            var trigger_event = 'add';
            if(parent.hasClass('ui-state-active')) {
                trigger_event = 'remove';
            }
            $('.selected-days').trigger(trigger_event, {'id': parent.attr('id'), 'rel': parent.attr('rel')});
            parent.toggleClass('ui-state-active');
        }
    });
});