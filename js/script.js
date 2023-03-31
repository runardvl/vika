$(function() {
    console.log( "ready!" );
    let first = $('#first')
    let second = $('#second')
    let third = $('#third')
    let last = $('#last')

    let btn1 = $("#btn1")
    let btn2 = $("#btn2")
    let btn3 = $("#btn3")
    let reset = $("#reset")
    const $scrollToTopButton = $('.scrollToTop');

    second.hide()
    third.hide()
    last.hide()

    function scrillToTop() {
        $('html, body').animate({scrollTop : 0},200);
    }

    btn1.on('click', function () {
        first.hide()
        second.show()
        scrillToTop()
    })

    btn2.on('click', function () {
        second.hide()
        third.show()
        scrillToTop()
    })

    btn3.on('click', function () {
        third.hide()
        last.show()
        scrillToTop()
    })

    reset.on('click', function () {
        last.hide()
        first.show()
        scrillToTop()
    })
});