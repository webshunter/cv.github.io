var m = div();

globalThis.m = m;

m.css('float','left')
m.css('width','250px')
m.css('margin','20px')
m.css('padding','20px')
m.css('height','calc(100vh - 80px)')
m.css('background','rgba(1,50,67,0.6)')
m.css('borderRadius','5px')
m.css('overflow-y','auto')
// bootstrap 5 navbar

m.child(
   ul().class('menu')
)

childes(m, [0]).el.css({
    listStyle: 'none'
})

var styleMenu = {
    padding: '12px 10px',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(25, 181, 254, 1)',
}

// menu on click do some thing

function menuAct(){

    var aw = globalThis.m.getChild(0);

    var cek = this.innerText;
    this.className = 'active';

    Array.from(aw.parent.childNodes).forEach(function(el,i){
        var text = el.innerText;
        if (cek == text) {
            el.className = 'active';
        }else{
            el.className = '';
        }
    })

}

// profile menu

childes(m, [0]).child(
    div()
)

childes(m, [0, 0]).el.css({
    textAlign: 'center',
    marginBottom: '12px'
})

childes(m, [0, 0]).child(
    h3().text('Gugus Darmayanto')
)

// create menu
childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Home').class('active')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('About')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Skill')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Experience')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Education')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Work')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('blog')
)

childes(m, [0]).child(
    li().css(styleMenu).click(menuAct).text('Contact')
)

// bootstrap 5 button navbar