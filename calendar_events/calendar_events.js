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
$.Controller('Ipark.Calendar.Events',{
    // sets up the widget
    init : function(){
        Ipark.Models.CalendarEvent.findAll({}, this.callback('allocate'));
    },

    /**
             * @param {Array} events An array of Ipark.Events objects.
             */
    allocate: function( events ){
        var self = this;
        $.each(events, function(index, event) {
            self.find('.ipark_models_day_'+event.date).children('.content').append('//calendar/calendar_events/views/event.ejs', {
                event:event
            });
        });
    },

    toggleEvent: function(element, event, show){
        element.toggleClass('ui-helper-hidden');
        //element.toggle(show);
    },

    '.slot toggle': function(element, event, show) {
        this.toggleEvent(element, event, show);
    },

    '.tour toggle': function(element, event, show) {
        this.toggleEvent(element, event, show);
    },

    '.assignment toggle': function(element, event, show) {
        this.toggleEvent(element, event, show);
    },

    '.event mouseover': function(element, event){
        element.addClass('ui-state-hover');
        event.stopPropagation();
    },

    '.event mouseout': function(element, event){
        element.removeClass('ui-state-hover');
        event.stopPropagation();
    },

    /**
             * Listens for recipes being created.	 When a recipe is created, displays the new recipe.
             * @param {String} called The open ajax event that was called.
             * @param {Event} recipe The new recipe.
             */
    'event.created subscribe': function( called, created_event ){
        this.allocate([created_event]);
        this.find("form input[type!=submit]").val(""); //clear old vals
    },

    /**
             *	 Listens for recipes being destroyed and removes them from being displayed.
             */
    "event.destroyed subscribe": function(called, deleted_event){
        deleted_event.elements().remove();	 //removes ALL elements
    },

    ".event click" : function (element, event) {
        console.log(element);
    }
})