$('.navcustom ul li').click(function () {
    $(this).children().addClass('active');
    $(this).siblings().children().removeClass('active');
});


// ; (function ($) {
//     "use strict"
//     var nav_offset_top = $('.head').height() + 10;
//     /*-------------------------------------------------------------------------------
//     Navbar 
//     -------------------------------------------------------------------------------*/

//     //* Navbar Fixed  
//     function navbarFixed() {

//         $(window).scroll(function () {
//             var scroll = $(window).scrollTop();
//             if (scroll >= nav_offset_top) {
//                 $(".head").addClass("navbar_fixed");
//             } else {
//                 $(".head").removeClass("navbar_fixed");
//             };
//         };
//     };
//     navbarFixed();

(function ($) {
    "use strict";
    navOffset = $('.head').haight() + 30;

    function navbarFixed() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= navOffset) {
                $('.head').addClass("navbar_fixed");
            } else {
                $('.head').removeClass("navbar_fixed");
            }
        });
    };
});
navbarFixed();







// function ($) {
//     "use strict";
//     var nav_top = $('.head').height() + 50;

//     // navbar fixed 
//     function fixedNavbar() {
//         if ($('.haed').length) {
//             $(window).scroll(function () {
//                 var scroll = $(window).scrollTop();
//                 if (scroll >= nav_top) {
//                     $('.head').addClass("navbar_fixed");
//                 } else {
//                     $('.head').removeClass("navbar_fixed");
//                 }
//             });
//         };
//     };
// };
// fixedNavbar();

