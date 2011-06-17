//steal/js calendar/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('calendar/scripts/build.html',{to: 'calendar'});
});
