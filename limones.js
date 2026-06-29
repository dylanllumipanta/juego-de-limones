let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;

function iniciar(){
    dibujarsuelo();
    dibujarpersonaje();
}

function dibujarsuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarpersonaje(){
    ctx.fillStyle="orange";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverizquierda(){
    personajeX=personajeX-10;
    actualizarpantalla();
}

function moverderecha(){
    personajeX=personajeX+10;
    actualizarpantalla();
}

function actualizarpantalla(){
    limpiarcanva();
    dibujarsuelo();
    dibujarpersonaje();
}

function limpiarcanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}