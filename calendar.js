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
        steal('//jquery.calendars/jquery.calendars.all.js',
              '//jquery.calendars/jquery.calendars-de.js',
              '//jquery.calendars/jquery.calendars.picker-de.js',
              '//qTip2/dist/jquery.qtip.js')
        .then(function($) {
            $.calendars.picker.setDefaults($.calendars.picker.regional['de']);
            var baseDate = $.calendars.instance('gregorian', 'de').newDate();
            $("td.content").ipark_calendar_month({
                baseDate: baseDate
            });

            $(".sidebar").ipark_calendar_sidebar();

            $(".navigation").ipark_calendar_navi({
                today: baseDate
            });
        })
    });