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
        slidesToShow: 2,
        cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        appendArrows: '.session-blog .control',
        arrows:true,
        centerPadding: '5%',
        infinite:false
      }
    },
    {
      breakpoint: 759,
      settings: {
         slidesToShow: 2,
        cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        appendArrows: '.session-blog .control',
        arrows:true,
        centerPadding: '5%',
        infinite:false
      }
    },
    {
      breakpoint: 700,
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

    $('.carr-interna-04 .wrap').slick({
      cssEase:'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      appendArrows: '.carr-interna-04 .control',
      arrows:true,
      fade:true
    });


  	$('.control .slick-prev').addClass('arrow-custom arrow-left-custom');
    $('.control .slick-next').addClass('arrow-custom arrow-right-custom');
    

  $('#playMovie1').click(function () {
    $('#myVideo')[0].play();
    $('#myVideo').addClass('active');
  });

   $('.playMovie1').click(function () {
    $('#myVideo')[0].play();
    $('#myVideo').addClass('active');
  });

  $('select.escolha').on('change', function(){
    $('.form-escolha').hide();
    $('#'+this.value).show();
  });

  $('.clickmnu').click(function(){
    $('nav ul li').removeClass('aberto');
    $(this).parent('li').addClass('aberto');
  });



  var globalInteresseArray = [];

  $('span.interesse-compra').click(function(){
    var valueOf = $(this).html();
    var arrayInteresse = $('#input-interesse-compra').attr('value');

    if($(this).hasClass('active')){
      $(this).removeClass('active');

      var index = globalInteresseArray.indexOf(valueOf);
      if (index > -1) {
       globalInteresseArray.splice(index, 1);
      }


    } else {
      $(this).addClass('active');
      globalInteresseArray.push(valueOf);

    }

    $('#input-interesse-compra').attr('value',globalInteresseArray);



  });

});




