$(document).ready(function(){

    /*****************************************************************/
    /***************************** WOW *******************************/
    /*****************************************************************/
            new WOW().init();
    
    
    /*****************************************************************/
    /*********************** STICKY NAV MENU *************************/
    /*****************************************************************/
    
         $(".navigation").sticky(
              {topSpacing:0,
              zIndex:999
         });
    
    
    /*****************************************************************/
    /*********************** MOBILE NAV MENU *************************/
    /*****************************************************************/
    
        $(".js-nav-icon").click(function(){
           $(this).toggleClass("change");
           $(".js-main-nav").slideToggle(500);
        });
    
        $(".js-menu").click(function(){
               if($(window).width() < 769){
                   $(".js-main-nav").slideUp(500);
                   $(".js-nav-icon").toggleClass("change");
                }
        });
    
        var $sidebarArrow = $(".js-sidebar-menu-arrow");
           // Sidebar navigation arrows
        $sidebarArrow.click(function() {
            $(this).next().slideToggle(300);
        });

    /****************************************************************/
    /************* HIGHLIGHT CURRENT PAGE IN NAVIGATION *************/
    /****************************************************************/
    
          $('a').each(function() {
                if ($(this).prop('href') == window.location.href) {
                  $(this).addClass('active');
                }
          });

    
    /*************************************************************************/
    /**************************** SCROLL TO TOP ******************************/
    /*************************************************************************/
    
           //Check to see if the window is top if not then display button
           $(window).scroll(function(){
                if ($(this).scrollTop() > 100) {
                    $('.js-scroll-to-top').fadeIn();
                } else {
                    $('.js-scroll-to-top').fadeOut();
                }
            });
            //Click event to scroll to top
            $('.js-scroll-to-top').click(function(){
                $('html, body').animate({scrollTop : 0},800);
                return false;
            });

    
    /*************************************************************************/
    /**************************** SLICK CAROUSEL *****************************/
    /*************************************************************************/
         
    
    
        $('.slides').on('init', function(event, slick, currentSlide){
            $('.slick-active h1').removeClass('js-hidden');
            $('.slick-active h1').addClass('animated fadeInDown');
            $('.slick-active .js-details').removeClass('js-hidden');
            $('.slick-active .js-details').addClass('animated fadeInDown');
            $('.slick-active .js-buttons').removeClass('js-hidden');
            $('.slick-active .js-buttons').addClass('animated fadeInUp');
        });
    
        /** BackGround Slides **/
    
         $('.slides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 3500,
             speed: 1000,
             arrows: true,
             dots: true
      
         });
    
    
         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('animated fadeInDown');
             $('.slick-active h1').addClass('js-hidden');
         });

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active h1').removeClass('js-hidden');
             $('.slick-active h1').addClass('animated fadeInDown');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('animated fadeInDown');
             $('.slick-active .js-details').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-details').removeClass('js-hidden');
             $('.slick-active .js-details').addClass('animated fadeInDown');
         });


         $('.slides').on('beforeChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('animated fadeInUp');
             $('.slick-active .js-buttons').addClass('js-hidden');
         }); 

         $('.slides').on('afterChange', function(event, slick, currentSlide){
             $('.slick-active .js-buttons').removeClass('js-hidden');
             $('.slick-active .js-buttons').addClass('animated fadeInUp');
         });

    
         /** Testimonials Slides **/

         $('.testimonialsSlides').slick({
             slidesToShow: 1,
             autoplay:true,
             pauseOnHover:true,
             autoplaySpeed: 5000,
             speed: 1000,
             dots: true
      
         });
    
        $('.otherServicesSlides').slick({
              slidesToShow: 3,
              slidesToScroll: 3,
              autoplay:true,
              dots: true,
              arrows: false,
              autoplaySpeed: 3000,
              speed: 1000,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 510,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });


    /***************************************************************************/
    /******************************* OPEN POPUP ********************************/
    /***************************************************************************/
            
               // Bind as an event handler
               $(document).on('click', '[data-lightbox]', lity);
   

    
    
    

    
  

    

    
    
    
              
});

