
$(document).ready(function(){

    // owl carousel
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    })

    // owl carousel
    $('.brands .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        responsive:{0: {items:2}, 768:{items:4}, 992:{items:6}}
    })

    // side-menu
    $('.menu').on('click', function(){
        $('.side-menu').toggleClass('open')
    })

    $('.fa-times').on('click', function(){
        $('.side-menu').removeClass('open')
    })

    //toggle navs
    $(window).scroll(function(){
        if($(this).scrollTop() >= 30){
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        }
        else {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
    })

    // Counter up
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-target')
            const count = +counter.innerText;
            const speed = target / delay;

            if(count < target){
                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }
        updateCount();
    })

    // Count down
    var content = $('.countdown').html();
    $('.countdown').countdown('2021/01/01', function(event) {
        $(this).html(event.strftime(content));
    });

    //Switch between links
    var link = $('link[data-color="switch"]'),
        logo = $('.logo img')

        $('.fa-adjust').on('click',function(){
            if(link.attr('href') == 'css/style-dark.css'){
                link.attr('href','css/style-light.css')
                logo.attr('src', 'images/logo-dark.png')
            }
            else {
                link.attr('href','css/style-dark.css')
                logo.attr('src', 'images/logo.png')
            }
    })
})