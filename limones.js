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

let puntaje=0;
let vidas=3;

let velocidadCaida=200;
let intervalo;

function iniciar(){
    intervalo = setInterval(bajarlimon,velocidadCaida);
    dibujarsuelo();
    dibujarpersonaje();
    aparecerLimon();
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
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado(){
    if(limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE
    ){
        aparecerLimon();
        puntaje++;
        mostrarEnSpan("txtPuntaje",puntaje);
        if(puntaje == 3){
            velocidadCaida = 150;
            clearInterval(intervalo);
            intervalo = setInterval(bajarlimon,velocidadCaida);
        }
        if(puntaje == 6){
            velocidadCaida = 100;
            clearInterval(intervalo);
            intervalo = setInterval(bajarlimon,velocidadCaida);
        }
        if(puntaje == 10){
            alert("Tienes todos los limones, pero a que costo...");
            clearInterval(intervalo);
        }
    }
}
function detectarPiso(){
    if(limonY + ALTURA_LIMON >=canvas.height - ALTURA_SUELO){
        aparecerLimon();
        vidas = vidas - 1;
        mostrarEnSpan("txtVidas",vidas);
        if(vidas == 0){
            alert("GAME OVER");
            clearInterval(intervalo);
        }
    }
}

function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarpantalla();
}

function reiniciar(){
    clearInterval(intervalo);
    puntaje = 0;
    vidas = 3;
    velocidadCaida = 200;
    mostrarEnSpan("txtPuntaje",puntaje);
    mostrarEnSpan("txtVidas",vidas);
    personajeX =canvas.width/2;
    personajeY =canvas.height -(ALTURA_SUELO +ALTURA_PERSONAJE);
    iniciar();
}
