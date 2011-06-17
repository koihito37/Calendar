steal.css('calendar')
    .plugins('jquery/model/list',
        'jquery/controller',
        'jquery/view/ejs',
        'jquery/dom/fixture',
        'jquery/dom/form_params',
        'jquery/controller/subscribe',
        'jquery/lang/json',
        'calendar/calendar_month',
        'calendar/calendar_events',
        'calendar/calendar_sidebar')
    .models('day', 'calendar_event')
    .then(function($) {
        $("#calendar_container").ipark_calendar_month();
        $("#sidebar_cell").ipark_calendar_sidebar();
    });