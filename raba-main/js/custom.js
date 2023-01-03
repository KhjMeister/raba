$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

var login = $('#login');
var close= $('#close')
login.click(function () {
    $('#modal_login').css('display', 'block');
});
close.click(function(){
    $('#modal_login').css('display', 'none');
});