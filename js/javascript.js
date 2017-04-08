$(function () {
    $('.icon-menu').on('click', function (e) {
        e.preventDefault();
        //origin
        // $('.menu').slideToggle(600, function () {
        //     if ($(this).css('display') === 'none') {
        //         $(this).removeAttr('style');
        //     }
        // });
////////////////////////////////////////////////////////////////////////////////////
//         $('.main-navigation').toggleClass("showMenu");
//         $('ul.menu').toggleClass("showMenu");
        //этот код работает
        $('.main-navigation').slideToggle(600, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
            // if ($(this).css('display') === 'block') {
            //     $('.main-navigation').css('display', 'inline-block');
            // }
        });
//////////////////////////////////////////////////////////////////////////////////// -block
       // $(".menu").slideToggle("slow");

        // $('.main-navigation').css('display','block');

        //  $('.main-navigation').toggle(0,function () {
        //
        //  });

    });
});
