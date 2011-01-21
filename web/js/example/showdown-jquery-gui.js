//
// showdown-gui.js
//
// A sample application for Showdown, a javascript port
// of Markdown.
//
// Globals
//

var converter;
//
//	Initialization
//

function startGui() {

	converter = new Showdown.converter();

	$('.inputPane').keypress(function() {
	    var text = converter.makeHtml($(this).val());
            $('.outputPane').html(text);
	});
}