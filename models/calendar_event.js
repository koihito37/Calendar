$.Model('Ipark.Models.CalendarEvent',{
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
            fixture: "//calendar/fixtures/events.json.get" //calculates the fixture path from the url and type.
        });
    },
    /**
             * Destroys a recipe's data.
             * @param {String} id A unique id representing your recipe.
             * @param {Function} success a callback function that indicates a successful destroy.
             * @param {Function} error a callback that should be called with an object of errors.
             */
    destroy: function( id, success, error ){
        $.ajax({
            url: '/recipes/'+id,
            type: 'delete',
            dataType: 'json',
            success: success,
            error: error,
            fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
        });
    },
    /**
             * Creates a recipe.
             * @param {Object} attrs A recipe's attributes.
             * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
             * @param {Function} error a callback that should be called with an object of errors.
             */
    create: function( attrs, success, error ){
        $.ajax({
            url: '/recipes',
            type: 'post',
            dataType: 'json',
            success: success,
            error: error,
            data: attrs,
            fixture: "-restCreate" //uses $.fixture.restCreate for response.
        });
    }
},{});