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
$.Controller('Ipark.Calendar.Sidebar',{

    // sets up the widget
    init : function(){
        var self = this;
        this.find('.toggle_event_visibility').each(function() {
            self.toggle_event_visibility(this);
        });
    },

    toggle_event_visibility: function( element ){
        element = $(element);
        // löse eine toggle event aus für alle events mit der Klasse, die
        // aus der element id berechnet wird
        $('.'+element.attr('id').substr(7)).trigger('toggle', [!element.hasClass('active')]);
        element.toggleClass('active');
    },

    '.toggle_event_visibility click': function(element, event) {
        this.toggle_event_visibility(element);
    },

    '.selected-days add': function(element, event, to_add) {
        element.append($('<li></li>').attr('id', 'selected_'+to_add.id).html(to_add.rel));
    },

    '.selected-days remove': function(element, event, to_remove) {
        this.find('#selected_'+to_remove.id).remove();
    }
})