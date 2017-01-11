// Narrative Animation

$(document).ready(function() {
	$image_area = $('.image_area');
	$text_area = $('.text_area');
	$narrToggle = false;
	
	$('a.narrative_btn').on('tap', function(event) {
		event.preventDefault();
		
		if ($narrToggle)
		{
			TweenMax.to($image_area, 1, {top: '0px'});
			TweenMax.to($text_area, 1, {top: '0px'});
		} else {
			TweenMax.to($image_area, 1, {top: '-300px'});
			TweenMax.to($text_area, 1, {top: '-300px'});
		}
		
		$narrToggle = !$narrToggle;
		
	});
	
});
