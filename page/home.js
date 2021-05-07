var homeStyle = {
    width: "calc(100% - 310px)",
    display: "inline-block",
    background: "rgba(1,50,67,0.6)",
    borderRadius: "5px",
    textAlign: "left",
    marginBottom: "20px",
}

var home = div().id('app-board');
home.css('padding','20px')
home.css('textAlign','right')
home.child(
    div().css(homeStyle)
    .child(
        div().css('padding', '20px')
    )
)

// sosmed ----------------------//

childes(home, [0,0]).child(
    el('i').class('fab fa-whatsapp')
    .css('float', 'right')
    .css('font-size', '30px')
    .css('margin-top', '20px')
    .css('margin-right', '20px')
    .css('cursor', 'pointer')
)

childes(home, [0,0]).child(
    el('i').class('fab fa-facebook')
    .css('float', 'right')
    .css('font-size', '30px')
    .css('margin-top', '20px')
    .css('margin-right', '20px')
    .css('cursor', 'pointer')
)

childes(home, [0,0]).child(
    el('i').class('fab fa-instagram')
    .css('float', 'right')
    .css('font-size', '30px')
    .css('margin-top', '20px')
    .css('margin-right', '20px')
    .css('cursor', 'pointer')
)

childes(home, [0,0]).child(
    el('i').class('fab fa-linkedin')
    .css('float', 'right')
    .css('font-size', '30px')
    .css('margin-top', '20px')
    .css('margin-right', '20px')
    .css('cursor', 'pointer')
)

// end sosmed ----------------------//

childes(home, [0,0]).child(
    h1().text('Gugus Darmayanto').css('margin-bottom', '18px').css('font-family', 'Roboto')
)

childes(home, [0,0]).child(
    h3().text('Web Developer')
)

var ss = home.child(
    div().css(homeStyle)
    .child(
        div().css('padding', '20px')
    )
)

var startProgrammer = 2018;

var dayKnow = new Date();

dayKnow = dayKnow.getFullYear();

childes(ss, [1, 0]).child(
    p().text('Nama saya Gugus Darmayanto, lebih akrab di panggil gugus, saya seorang web developer dengan pengalaman kurang lebih '+(dayKnow - startProgrammer)+' tahun, saat ini saya saya menguasai PHP OOP dan Framework PHP codigniter dan laravel serta Nodejs.')
    .css('line-height', '1.8')
)