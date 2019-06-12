$(document).ready(function(){

    $('.photos__slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });

    // $('.modal-request-show').click(function(){
    //     $('#modal-request').modal('show');
    // });

    // $('.tel-inp').inputmask({
    //     "mask": "+7 (999) 999-99-99"
    //     , "placeholder": "_"
    //     , showMaskOnHover: false
    //     , showMaskOnFocus: true
    // });

    // function scrollMenus() {
    //     if($(window).scrollTop() > 0){
    //         $('header').addClass('fixed-style');
    //       }
    //       else {
    //         $('header').removeClass('fixed-style');
    //     }
    // }
   
    // scrollMenus();

    // $(window).scroll(function(){
    //     scrollMenus();
    // });
    
});

