var hide = true
var show = true

$('.readmore').click(function(){
	if(hide){
		$('#show-this-on-click').slideDown().show();
		$('.readless').show();
		$('.readmore').hide();
	}
});

$('.readless').click(function(){
	if(show){
		$('#show-this-on-click').slideUp().hide();
		$('.readless').hide();
		$('.readmore').show();
	}	
});

$('.learnmore').click(function(){
	if(hide){
		$('.learnmoretext').slideDown().show();
		$('.learnmore').hide();
	}
});


/*

$('.readmore').click(showMore);
function showMore() {
	$('#show-this-on-click').slideToggle();
}
$('#show-this-on-click').hide();

*/