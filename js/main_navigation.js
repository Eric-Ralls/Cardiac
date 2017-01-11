var main_nav_buttons = [
	{class:"main_menu_btn", href:"index.html"}
	, {class:"five_keys_btn", href:"5_keys_01.html"}
	, {class:"guidelines_btn", href:"guidelines_01.html"}
	, {class:"speed_btn", href:"speed_01.html"}
	, {class:"standardization_btn", href:"standardization_01.html"}
	, {class:"reliability_btn", href:"reliability_01.html"}
	, {class:"sensitivity_btn", href:"sensitivity_01.html"}
	, {class:"background_btn", href:"background_01.html"}
];

function initMainNavigation(){
	var lastObject = jQuery("div.button_line");

	for(var i=0; i < main_nav_buttons.length; i++){
		var button = main_nav_buttons[i];
		var link = jQuery("<a />").addClass(button.class).attr("href", button.href);

		lastObject = link.insertAfter(lastObject);
	}
}

jQuery(initMainNavigation);

$(document).ready(function() {
	
	$('body').on('touchmove', function(event) {
		event.preventDefault();
	});
	
});