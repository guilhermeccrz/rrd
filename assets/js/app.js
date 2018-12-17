$(document).ready(function(){
	//ACTIONS HEADER
	$('.btn-nav').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$('header nav').removeClass('opened');
      $('.breadcrumb-x').removeClass('opened');

		} else {
			$(this).addClass('opened');
			$('header nav').addClass('opened');
      $('.breadcrumb-x').addClass('opened');
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

    $(".carr-home-01").on("afterChange", function (){
      var targetCurrent = $('.slick-current');
      if(targetCurrent.hasClass('dark')){

        $('.search-box').addClass('dark');
        $('.sidebar').addClass('dark');

      } else {

        $('.search-box').removeClass('dark');
        $('.sidebar').removeClass('dark');

      }
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

    $('.carr-home-04 .wrap').slick({
      cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      appendArrows: '.carr-home-04 .control',
      arrows:true,
      autoplay:true,
      autoplaySpeed:9000,
    });

    $('.carr-home-05').slick({
      slidesToShow: 5,
      cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      appendArrows: '.session-blog .control',
      arrows:true,
      centerPadding: '5%',
      infinite:false,
      responsive: [
    {
      breakpoint: 1489,
      settings: {
        slidesToShow: 3,
        cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        appendArrows: '.session-blog .control',
        arrows:true,
        centerPadding: '5%',
        infinite:false
      }
    },
    {
      breakpoint: 992,
      settings: {
         slidesToShow: 1,
        cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        appendArrows: '.session-blog .control',
        arrows:true,
        centerPadding: '5%',
        infinite:false
      }
    },
    {
      breakpoint: 0,
      settings: {
         slidesToShow: 1,
        cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        appendArrows: '.session-blog .control',
        arrows:true,
        centerPadding: '5%',
        infinite:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    $('.carr-home-05').on('breakpoint', function(event, slick, breakpoint) {
        $('.control .slick-prev').addClass('arrow-custom arrow-left-custom');
        $('.control .slick-next').addClass('arrow-custom arrow-right-custom');
  });

    $('.carr-interna-01 .wrap').slick({
      cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      appendArrows: '.carr-interna-01 .control',
      arrows:true
    });



  	$('.control .slick-prev').addClass('arrow-custom arrow-left-custom');
  	$('.control .slick-next').addClass('arrow-custom arrow-right-custom');
});

