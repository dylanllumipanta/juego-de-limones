let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE)

let limonX=canvas.width/2;
let limonY=0;

function iniciar(){
    dibujarsuelo();
    dibujarpersonaje();
    dibujarlimon();
}

function dibujarsuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarpersonaje(){
    ctx.fillStyle="orange";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverizquierda(){
    personajeX=personajeX-10;
    actualizarpantalla();
    detectarColision();
}

function moverderecha(){
    personajeX=personajeX+10;
    actualizarpantalla();
    detectarColision();
}

function actualizarpantalla(){
    limpiarcanva();
    dibujarsuelo();
    dibujarpersonaje();
    dibujarlimon();
}

function limpiarcanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarlimon(){
    ctx.fillStyle="lime";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarlimon(){
    limonY=limonY+10;
    actualizarpantalla();
}

function detectarColision(){
    if(limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE){
        alert("atrapado");
    }
}