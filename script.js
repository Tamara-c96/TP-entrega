/*historia*/
let BotonIniciar = document.getElementById("botonPlay");
let BotonDetener = document.getElementById("botonPausa");
let videoHist = document.querySelector("video");
let duracionVid = document.getElementById("pVideo");
/*juguemos*/
let cuadroGris = document.getElementsByClassName(".divJuguemos");
let imagenes = document.getElementsByClassName(".imgJuguemos");


BotonIniciar.addEventListener('click',()=>{
    videoHist.play()
});
BotonDetener.addEventListener('click',()=>{
    videoHist.pause()
});

/*aparece ${}en celeste*/
duracionVid.textContent = videoHist.duration;

imagenes.addEventListener("dragstart",inicio);
imagenes.addEventListener("dragend",fin);
cuadroGris.addEventListener("dragover",evitarDefault);
cuadroGris.addEventListener("drop",soltar);

function inicio(evento) {
    evento.dataTransfer.setData("Text","./imagenes/rompe2.png");
};

function soltar(evento) {
    let data= evento.dataTransfer.getData("Text");
    cuadroGris.innerHTML=`<img class=imgJuguemos> src=""${data}"/>`  
};

function evitarDefault(evento) {
    evento.preventDefault();  
};

function fin(evento) {
    let imagenes=evento.target;
    imagenes.style.visibility="hidden";
};