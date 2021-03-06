var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnPausar;
var btnReversa;
var btnPlay;

window.onload = function () {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
    btnReiniciar.onclick = reiniciar;
}

function animar() {
    animacion = TweenLite.to(logo, 2, {
        left: "100%",
        backgroundColor: "#000",
        borderRadius: 50,
        ease: Elastic.easeIn,
        onComplete: animacionTerminada,
        onCompleteParams: ["animacion terminada", "parametro 2"]
    });
}

function reiniciar() {
    animacion.restart();
}

function animacionTerminada(dato1, dato2) {

    console.log(dato1);
    console.log(dato2);
}