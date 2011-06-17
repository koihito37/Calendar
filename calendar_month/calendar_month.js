steal.plugins(
    'jquery/controller',
    'jquery/view/ejs').then(function($){
    /**
         * A Todos widget created like
         *
         *    $("#todos").todos({ list: new Todo.List() });
         *
         * It listens on changes to the list and items in the list with the following actions:
         *
         *   - "{list} add"    - todos being added to the list
         *   - "{list} remove" - todos being removed from the list
         *   - "{list} update" - todos being updated in the list
         *
         */
    $.Controller('Ipark.Calendar.Month',{

        // sets up the widget
        init : function(){
            Ipark.Models.Day.findAll({}, this.callback('build_days'));
        },

        /**
             * @param {Array} days An array of Ipark.Models.Day objects.
             */
        build_days: function( days ){
            this.find('#event_container').html('//calendar/calendar_month/views/days.ejs', {
                days:days
            });
            this.find('#event_container').ipark_calendar_events();
        },

        '.day_header click': function(element, event) {
            var to_toggle = $('.ipark_models_day_'+element.attr('id'));
            var trigger_event = 'add';
            if(to_toggle.hasClass('selected')) {
                trigger_event = 'remove';
            }
            $('#selected_days').trigger(trigger_event, {'id': element.attr('id'), 'rel': element.attr('rel')});
            $('.ipark_models_day_'+element.attr('id')).toggleClass('selected');
        }
    });
});