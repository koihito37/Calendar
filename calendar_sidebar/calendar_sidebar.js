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
$.Controller('Ipark.Calendar.Sidebar',
{
    listensTo : ['changeDate']
},
{
    // sets up the widget
    init : function(){
        var self = this;
        this.find('.toggle_event_visibility').each(function() {
            self.toggle_event_visibility(this);
        });

        this.find('div.datepicker').calendarsPicker({
            firstDay: 1,
            changeMonth: false,
            fixedWeeks: true,
            showOtherMonths: true,
            renderer: $.calendars.picker.weekOfYearRenderer,
            onSelect: function (date) {
                $(".navigation").ipark_calendar_navi().trigger('changeDate', date);
            }
        });
    },

    'changeDate': function (element, event, date) {
        this.find('div.datepicker').calendarsPicker('setDate', date);
    },

    toggle_event_visibility: function( element ){
        var element = $(element);
        var selector = null;
        // löse eine toggle event aus für alle events mit der Klasse, die
        // aus der element class stammt
        if(element.hasClass('slot')){
            selector = 'slot';
        }

        if(element.hasClass('tour')){
            selector = 'tour';
        }

        if(element.hasClass('assignment')){
            selector = 'assignment';
        }
        $('.event.'+selector).trigger('toggle', [!element.hasClass('active')]);
        element.toggleClass('active');
    },

    '.toggle_event_visibility click': function(element, _event) {
        this.toggle_event_visibility(element);
    },

    '.selected-days add': function(element, _event, date) {
        element.append($('<li></li>')
            .attr('id', 'selected_'+date.formatDate('yyymmdd'))
            .html(date.formatDate('dd.mm.yyyy')));
    },

    '.selected-days remove': function(_element, _event, date) {
        this.find('#selected_'+date.formatDate('yyymmdd')).remove();
    }
})