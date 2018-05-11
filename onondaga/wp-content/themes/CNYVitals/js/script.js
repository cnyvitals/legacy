/* Author:

*/


$(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
  $('ul.posts').hide();
 
 // toggles the slickbox on clicking the noted link  
  $('div.taglist h4').click(function() {
    $(this).next('ul').slideToggle(400);
	$(this).toggleClass("active");
    return false;
  });
});

// $(document).ready(function() {
 // hides the slickbox as soon as the DOM is ready
//  $('ul#catnav').hide();
 
 // toggles the slickbox on clicking the noted link  
//  $('header nav h2').click(function() {
//    $(this).next('ul').slideToggle(400);
//	$(this).toggleClass("active");
//    return false;
//  });
//});

function slideSwitch() {
    var $active = $('.scroller IMG.active');

    if ( $active.length == 0 ) $active = $('.scroller IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('.scroller IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

$(".subjectareas li.box1").css("border","13px solid red");

$(document).ready(function(){	
	$("#sponsors").easySlider({
		auto: true, 
		continuous: true,
		controlsShow: false
	});
});