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

    second.hide()
    third.hide()
    last.hide()

    btn1.on('click', function () {
        first.hide()
        second.show()
    })

    btn2.on('click', function () {
        second.hide()
        third.show()
    })

    btn3.on('click', function () {
        third.hide()
        last.show()
    })

    reset.on('click', function () {
        last.hide()
        first.show()
    })
});