let BotonIniciar = document.getElementById("botonPlay");
let BotonDetener = document.getElementById("botonPausa");
let videoHist = document.querySelector("video");
let duracionVideo = document.getElementById("pVideo");

BotonIniciar.addEventListener('click',()=>{
    videoHist.play()
});

BotonDetener.addEventListener('click',()=>{
    videoHist.pause()
});

