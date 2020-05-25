console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video = document.getElementById("video")
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const img = document.getElementById("img")

//-- Obtener los botones
const play1 = document.getElementById("play1")
const stop = document.getElementById("stop")
const play2 = document.getElementById("play2")
const play3 = document.getElementById("play3")
const play4 = document.getElementById("play4")

const manual = document.getElementById("manual")

video.width=600;
video.height=300;
video1.width=200;
video1.height=100;
video2.width=200;
video2.height=100;
video3.width=200;
video3.height=100;
img.width=200;
img.height=100;

video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
img.src="pruebas.jpeg"

video1.play();
video2.play();
video3.play();

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

play1.classList.add("botones");
play2.classList.add("botones");
play3.classList.add("botones");
play4.classList.add("botones");

manual.onclick = () => {
  console.log("click manual")
  play1.classList.remove("botones");
  play2.classList.remove("botones");
  play3.classList.remove("botones");
  play4.classList.remove("botones");
  //-- Función de retrollamada del botón de ver
  play1.onclick = () => {
    console.log("Click emision 1");
    video.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
    video.play();
    video1.classList.add("mystyle");
    video3.classList.remove("mystyle");
    video2.classList.remove("mystyle");
    img.classList.remove("mystyle");
  };

  play2.onclick = () => {
    console.log("Click emision 2");
    video.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
    video.play();
    video2.classList.add("mystyle");
    video1.classList.remove("mystyle");
    video3.classList.remove("mystyle");
    img.classList.remove("mystyle");
  };

  play3.onclick = () => {
    console.log("Click emision 3");
    video.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
    video.play();
    video3.classList.add("mystyle");
    video1.classList.remove("mystyle");
    video2.classList.remove("mystyle");
    img.classList.remove("mystyle");
  };

  play4.onclick = () => {
    console.log("Click emision 4");
    video.src="pruebas.jpeg"
    video.poster="pruebas.jpeg";
    video3.classList.remove("mystyle");
    video1.classList.remove("mystyle");
    video2.classList.remove("mystyle");
    img.classList.add("mystyle");
  };
}

stop.onclick = () => {
  play1.classList.add("botones");
  play2.classList.add("botones");
  play3.classList.add("botones");
  play4.classList.add("botones");
  video.pause();
  video.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video.src=null;


  video3.classList.remove("mystyle");
  video1.classList.remove("mystyle");
  video2.classList.remove("mystyle");
  img.classList.remove("mystyle");


}
