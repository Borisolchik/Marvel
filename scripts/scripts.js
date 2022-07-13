$(document).ready(function () {

    $('#burger').click(function () {
        $('.header__menu-items').addClass('open');
        $('.header__menu-adaptive').css('display', 'flex');
        $('.button-adaptive').css('display', 'block');
    });

    $('.close').click(function () {
        $('.header__menu-items').removeClass('open');
    });


    $('.header .button').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    });

    $('.header .button-adaptive').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
        $('.header__menu-items').removeClass('open');
    });

    $('.header__menu-item.about-adaptive').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
        $('.header__menu-items').removeClass('open');
    });

    $('.header__menu-item.services-adaptive').click(function () {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 1000);
        $('.header__menu-items').removeClass('open');
    });

    $('.header__menu-item.contact-adaptive').click(function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
        $('.header__menu-items').removeClass('open');
    });

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1109,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 0,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 0,
                }
            }
        ]
    });

    let hasError = false;
    $('#button').click(function () {
        let name = $('#name');
        let email = $('#email');
        $('.error-input').hide();
        name.css('border-color', 'transparent');
        email.css('border-color', 'transparent');

        if (!name.val()) {
            name.next().show();
            hasError = true;
            name.css('border-color', 'red');
        }
        if (!email.val()) {
            email.next().show();
            hasError = true;
            email.css('border-color', 'red');
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), phone: email.val()}
            })
                .done(function (msg) {
                    if (msg.success) {
                        $('.form').css('display', 'none');
                        $('#form-success').css('display', 'block');
                    } else {
                        alert('Возникла ошибка, попробуйте еще раз');
                    }
                });
        }

    });

    new WOW().init();

});