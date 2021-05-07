
var globalJawaban = {};

var h = div()
h.class('card')
h.child(
    div()
        .class('card-body')
)

// judul kuis
h.getChild(0).child(
    span()
        .class('border 1')
        .css({
            padding: '8px 10px',
            borderRadius: '5px',
        })
        .text('kuis 1')
)

// config time finish
var confTime = 60 * 10;
// clock time 

// do something if proses finish
function doSomething() {

}

// start time working
function timeForWorking(a) {

    setTimeout(function () {

        a.el.innerText = confTime;

        confTime--;

        if (confTime >= 0) {
            timeForWorking(a);
        } else {
            doSomething()
        }
    }, 1000)
}


// judul TImer
h.getChild(0).child(
    span()
        .class('border 1')
        .css({
            marginLeft: '5px',
            padding: '8px 10px',
            borderRadius: '5px',
        })
        .child(
            span().class('fa fa-clock').css('margin-right', '5px')
        )
        .child(
            el('i').text('icon').id('timer').load(timeForWorking)
        )
)


h.getChild(0).child(
    span()
        .class('border 1')
        .css({
            marginLeft: '5px',
            padding: '8px 10px',
            borderRadius: '5px',
        })
        .text('soal 1').id('soal-active')
)


// soal list ------------------------------------//
var m = div()

m.class('row')

// soal list

function clickSoalAct() {

    var val = this.getAttribute('data-soal');

    var s = document.getElementById('soal-active');

    s.innerText = 'soal ' + val;

    var params = 'soal-' + val;


    var e = document.getElementById('soal');



    e.innerText = 'soal ' + val;

    k = globalThis.d.el;

    k.html('')

    var dataPilihan = [
        'pilihan a'
        , 'pilihan b'
        , 'pilihan c'
        , 'pilihan d'
        , 'pilihan e'
    ];

    // pilihan soal
    for (let xs = 0; xs < dataPilihan.length; xs++) {
        globalThis.d.child(
            el('li')
                .child(
                    input().change(function () {

                        var val = this.value;

                        globalJawaban[params] = val;


                    }).val(xs).id('radio' + xs).type('radio').name('radio').class('form-check-input')
                        .css('margin-right', '5px')
                        .css('cursor', 'pointer')
                )
                .child(
                    label()
                        .text('soal ' + val + ' ' + dataPilihan[xs]).attr('for', 'radio' + xs)
                        .css('cursor', 'pointer')
                )
        )
    }

    globalThis.d.parent.childNodes.forEach(function (el, i) {
        var c = Array.from(el.childNodes);
        if (globalJawaban[params] == c[0].value) {
            c[0].setAttribute('checked', '')
        }

    })

}


for (let dx = 0; dx < 10; dx++) {
    m.child(
        div()
            .class('col-sm-12 col-lg-4 mb-3')
            .css('cursor', 'pointer')
            .data('soal', dx + 1)
            .click(clickSoalAct)
            .child(
                div().class('card')
                    .child(
                        div().class('card-body text-center')
                            .child(
                                label().css({
                                    'font-size': '12pt'
                                }).text('soal ' + (dx + 1))
                            )
                    )
            )
    )
}

// soal content-----------------------------------------------//

var x = div()
    .class('card h-100 mt-3')

x.child(
    div()
        .class('card-body')
);

// create body content

var c = x.getChild(0);


c.child(
    div().id('soal').text('But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?')
)

c.child(
    el('ol')
)

globalThis.e = c.el.getChild(0);


var d = c.el.getChild(1);

d.el.id('list-jawaban')

d.el.css({
    listStyle: "none"
})


globalThis.d = d;

var dataPilihan = [
    'pilihan a'
    , 'pilihan b'
    , 'pilihan c'
    , 'pilihan d'
    , 'pilihan e'
];

// pilihan soal
for (let xs = 0; xs < dataPilihan.length; xs++) {
    d.child(
        el('li')
            .child(
                input().id('radio' + xs).type('radio').name('radio').class('form-check-input')
                    .css('margin-right', '5px')
                    .css('cursor', 'pointer')
            )
            .child(
                label()
                    .text(dataPilihan[xs]).attr('for', 'radio' + xs)
                    .css('cursor', 'pointer')
            )
    )
}


var home =
    div()

        .class('container')

        .child(
            div()
                .class('row')
                .child(
                    div().class('col-sm-12 mt-3')
                        .child(h)
                )
                .child(
                    div().class('col-sm-8')
                        .child(x)
                )
                .child(
                    div().class('col-sm-4')
                        .child(
                            div().class('card h-100 mt-3 border-0')
                                .child(
                                    div().class('card-body')
                                        .child(m)
                                )
                        )
                )
        )

// get menu
var menu = home.getChild(0).el.getChild(2).el.getChild(0).el.getChild(0).el.getChild(0).parent;

(function callBackMenu() {

    console.log(globalJawaban);

    Array.from(menu.childNodes).forEach(function (el, i) {
        console.log(el.getAttribute('data-soal'));
    })


})()