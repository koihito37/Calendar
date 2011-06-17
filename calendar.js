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
        'calendar/calendar_sidebar',
        'calendar/calendar_navi'
        )
    .models('day', 'calendar_event')
    .then(function($) {
        steal('//jquery.calendars/jquery.calendars.all.js')
        .then(function($) {
            $("td.content").ipark_calendar_month();
            $(".sidebar").ipark_calendar_sidebar();
            $(".navigation").ipark_calendar_navi();
        })
    });