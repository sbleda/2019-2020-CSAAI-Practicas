console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");
//-- Obtener Sonidos
const sonido_saque = new Audio("pong-tanto.mp3");
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("Bing_1.mp3");
const sonido_gol = new Audio("pong.mp3");

const auto = document.getElementById('auto');
const manual = document.getElementById('manual');
const facil = document.getElementById('facil');
const medio = document.getElementById('medio');
const dificil = document.getElementById('dificil');

facil.classList.add("niveles");
dificil.classList.add("niveles");
medio.classList.add("niveles");

var c = 0;
var n = 0;

function teclas(){
  manual.onclick = () => {
    facil.disabled=true;
    medio.disabled=true;
    dificil.disabled=true;
    facil.classList.add("niveles");
    dificil.classList.add("niveles");
    medio.classList.add("niveles");
    window.onkeydown = (e) => {
      switch (e.key) {
        case "a":
          raqI.v = raqI.v_ini;
          break;
        case "q":
          raqI.v = raqI.v_ini * -1;
          break;
        case "p":
          raqD.v = raqD.v_ini * -1;
          break;
        case "l":
          raqD.v = raqD.v_ini;
          break;
        case " ":
          sonido_saque.currentTime = 0;
          sonido_saque.play();
          if(bola.x == bola.x_ini && bola.y == bola.y_ini){
            bola.vx = bola.vx_ini;
            bola.vy = bola.vy_ini;
          }
          else if (bola.x == 500 && bola.y == bola.y_ini){
            bola.vx = -bola.vx_ini;
            bola.vy = -bola.vy_ini;
          }
        default:
      }
    }
  }
  auto.onclick = () => {
    facil.disabled=false;
    medio.disabled=false;
    dificil.disabled=false;
    manual.disabled=true;
    facil.classList.remove("niveles");
    dificil.classList.remove("niveles");
    medio.classList.remove("niveles");
    window.onkeydown = (e) => {
      switch (e.key) {
        case "p":
          raqD.v = raqD.v_ini * -1;
          break;
        case "l":
          raqD.v = raqD.v_ini;
          break;
        case " ":
          sonido_saque.currentTime = 0;
          sonido_saque.play();
          if(bola.x == bola.x_ini && bola.y == bola.y_ini){
            bola.vx = bola.vx_ini;
            bola.vy = bola.vy_ini;
          }
          else if (bola.x == 500 && bola.y == bola.y_ini){
            bola.vx = -bola.vx_ini;
            bola.vy = -bola.vy_ini;
          }
        default:
      }
    }
    facil.onclick = () => {
      velo = 0.7;
      animate();
    }
    medio.onclick = () => {
      velo = 0.85;
      animate();
    }
    dificil.onclick = () => {
      velo = 0.9;
      animate();
    }

    function animate() {
      if (raqI.y <= 400 && raqI.y >= 0){
        raqI.y = bola.y*velo;
      }
      requestAnimationFrame(function() {
        animate();
      });
    }
  }
}


//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = '#FF355E';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  if (bola.x==canvas.width){
    sonido_gol.currentTime = 0;
    sonido_gol.play();
    n +=1;
    bola.x = 500;
    bola.y = 200;
    bola.vx = 0;
    bola.vy = 0;
    teclas();
  }
  ctx.fillText(n, 200, 80);

  if (bola.x==0){
    sonido_gol.currentTime = 0;
    sonido_gol.play();
    c +=1;
    bola.x = 100;
    bola.y = 200;
    bola.vx = 0;
    bola.vy = 0;
    teclas();
  }
  ctx.fillText(c, 340, 80);
}

//---- Bucle principal de la animación
function animacion(){
  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho o izq
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x >= canvas.width || bola.x <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
    sonido_rebote.currentTime = 1;
    sonido_rebote.play();
  }

  if (bola.y >= canvas.height || bola.y <=0){
    bola.vy = bola.vy * -1;
    sonido_rebote.currentTime = 0;
    sonido_rebote.play();
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);
teclas();

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta izq
    raqI.v = 0;
  }

  //-- Quitar velocidad de la raqueta derecha
  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}
