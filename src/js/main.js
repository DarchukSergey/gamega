$( document ).ready(function(){
    // $('body').addClass('my-app');
    // console.log('Hello !!! JavaScript is Enabled and JQuery is Working Good!)))');
    $('.slider').slick({
        nextArrow: '<img src="images/slider/white_arrow.svg" class="nextArrow">',
        dots:true,
        centerMode: true,
        centerPadding: '150px 0 0',
        asNavFor:'.slider-inter',
        
    }); 
    $('.slider-inter').slick({
        asNavFor:'.slider',
        focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true, 
    });   
    (function($){
        $(function() {
            $('.menu__icon').on('click', function() {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
            });
            
            $('.menu__links-item').on('click', function() {
            // do something
        
            $(this).closest('.menu')
                .removeClass('menu_state_open');
            });
        });
        })(jQuery);
});