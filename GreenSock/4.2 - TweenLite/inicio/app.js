var animacion;
var logo;
var btnReiniciar;
var btnAnimar;


window.onload = function () {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");

    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
}

function animar() {
    animacion = TweenLite.to(logo, 3, {
        left: 400,
        backgroundColor: "black",
        borderRadius: "50%",
        delay: 1,
        ease: Back.easeIn,
        onComplete: finish,
        onCompleteParams: ["param1", "param2"]
    });


    btnReiniciar.onclick = function () {
        animacion.restart();
    }

}

function animateImg() {
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    TweenLite.to([img1, img2, img3], 2, {
        left: "80%",
        backgroundColor: "pink",
        borderRadius: "50%",
        scale: 0.5,
        ease: Elastic.easeIn
    });
}

function finish(d1, d2) {
    console.log("d1=", d1);
    console.log("d2=", d2);
    animateImg();
}