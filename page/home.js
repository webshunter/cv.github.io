var home = div().id('app-board');
home.css('padding','20px')
home.css('textAlign','right')
home.child(
    div().css({
        width: "calc(100% - 310px)",
        display: "inline-block",
        background: "#233",
        borderRadius: "5px",
        textAlign: "left",
    })
    .child(
        div().css('padding', '20px')
    )
)

childes(home, [0,0]).child(
    h1().text('Gugus Darmayanto').css('margin-bottom', '20px').css('font-family', 'Roboto')
)
childes(home, [0,0]).child(
    h3().text('Web Developer')
)