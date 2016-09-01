var menuButtoon = (function(){

	return{
		init: function(){
			$('.open-menu').on('click', function(e){
				e.preventDefault();
				var menuHolder = $('#wrapper');
				menuHolder.toggleClass("show");
			});	
		}
	}
}());

$(document).ready(function(){
	if($('.open-menu').length){
		menuButtoon.init();
	};
});


 $('.carousel').slick({
  mobileFirst: true,
 	autoplay: true,
 	autoplaySpeed: 3000,
 	speed: 1000,
 	slidesToShow: 1,
 	slidesToScroll: 1,
  arrows: false,
 	responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,

      }
    }
  ]
 });



 $(document).ready(function(){
  $('a[href*=#down]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 800);
    e.preventDefault();
  });
  return false;
});

$(document).ready(function(){
  $("#navbar").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});