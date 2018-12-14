$(document).ready(function(){
	//ACTIONS HEADER
	$('.btn-nav').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('header nav').removeClass('opened');

		} else {
			$(this).addClass('opened');
			$('header nav').addClass('opened');
		}
	});

	$('.search-box').hover(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');

		} else {
			$(this).addClass('opened');
		}
	});

	//CARROUSEL
	$('.carr-home-01').slick({
  		focusOnSelect: true,
  		autoplay:true,
  		autoplaySpeed:3000,
  		cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  		arrows:false
  	});

  	$('.carr-home-02 .wrap').slick({
  		slidesToShow: 3,
  		cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  		appendArrows: '.carr-home-02 .control',
  		arrows:true
  	});

  	$('.carr-home-03 .wrap').slick({
  		cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  		appendArrows: '.carr-home-03 .control',
  		arrows:true,
  		dots: true,
  		autoplay:true,
  		autoplaySpeed:9000,
  	});

  	$('.control .slick-prev').addClass('arrow-custom arrow-left-custom');
  	$('.control .slick-next').addClass('arrow-custom arrow-right-custom');
});