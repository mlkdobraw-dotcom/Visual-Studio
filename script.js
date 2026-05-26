const nav = document.getElementById("nav");

nav.addEventListener("mouseenter", function(){

    nav.style.transform = "scale(1.2)";
    nav.style.transition = "0.3s";
});

nav.addEventListener("mouseleave", function(){

    nav.style.transform = "scale(1.0)";
});

const botao = document.getElementById("botao");
botao.addEventListener("mouseenter", function(){
    botao.style.transform = "scale(1.2)";
    botao.style.transition = "0.3s";
})

botao.addEventListener("mouseleave", function(){
    botao.style.transform = "scale(1.0)";
});

const img = document.getElementById("VsCODE");

let subir = true;

setInterval(function(){

    if(subir){

        img.style.transform = "translateY(-20px)";
        subir = false;

    }
    else {
        img.style.transform = "translateY(0px)";
        subir = true;
    }

    img.style.transition = "2.0s";
}, 1500);