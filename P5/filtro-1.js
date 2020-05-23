console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('img');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');

const color = document.getElementById("color");
const gris = document.getElementById("gris");
const negativo = document.getElementById("negativo");
const sepia = document.getElementById("sepia");
const espejo = document.getElementById("espejo");
const invertir = document.getElementById("invertir");


const colores = document.getElementById("colores");

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');



function imagen () {
  //-- Función de retrollamada de imagen cargada
  //-- La imagen no se carga instantaneamente, sino que
  //-- lleva un tiempo. Sólo podemos acceder a ella una vez
  //-- que esté totalmente cargada
  img.onload = function () {

    //-- Se establece como tamaño del canvas el mismo
    //-- que el de la imagen original
    canvas.width = img.width;
    canvas.height = img.height;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia

    ctx.drawImage(img, 0,0);

    console.log("Imagen lista...");
  };

  color.onclick = () => {
    ctx.drawImage(img, 0,0);
    colores.classList.remove("mystyle");
    deslizador.value = 255;
    deslizador2.value = 255;
    deslizador3.value = 255;
    range_value.innerHTML = deslizador.value;
    range_value2.innerHTML = deslizador2.value;
    range_value3.innerHTML = deslizador3.value;


    console.log("Click!");


    //-- Funcion de retrollamada del deslizador
    deslizador.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador rojo
      range_value.innerHTML = deslizador.value;


      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Obtener el umbral de rojo del desliador


      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {

        if (data[i] > deslizador.value){
          data[i] = deslizador.value;
        }
        if (data[i+1] > deslizador2.value) {
          data[i+1] = deslizador2.value;
        }
        if (data[i+2] > deslizador3.value) {
          data[i+2] = deslizador3.value;
        }

      }

      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);

    }

    deslizador2.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador2
      range_value2.innerHTML = deslizador2.value;

      //-- Situar la imagen original en el canvas
      //-- No se han hecho manipulaciones todavia

      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Obtener el umbral de rojo del desliador


      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {

        if (data[i+1] > deslizador2.value){
          data[i+1] = deslizador2.value;
       }
       if (data[i+2] > deslizador3.value) {
         data[i+2] = deslizador3.value;
       }
       if (data[i] > deslizador.value) {
         data[i] = deslizador.value;
       }
      }
      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);

    }

    deslizador3.oninput = () => {
      ctx.drawImage(img, 0,0);
      //-- Mostrar el nuevo valor del deslizador3
      range_value3.innerHTML = deslizador3.value;

      //-- Situar la imagen original en el canvas
      //-- No se han hecho manipulaciones todavia

      //-- Obtener la imagen del canvas en pixeles
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      //-- Obtener el array con todos los píxeles
      let data = imgData.data

      //-- Obtener el umbral de rojo del desliador


      //-- Filtrar la imagen según el nuevo umbral
      for (let i = 0; i < data.length; i+=4) {

        if (data[i+2] > deslizador3.value){
          data[i+2] = deslizador3.value;
        }
        if (data[i+1] > deslizador2.value) {
          data[i+1] = deslizador2.value;
        }
        if (data[i] > deslizador.value) {
          data[i] = deslizador.value;
        }

      }

      //-- Poner la imagen modificada en el canvas
      ctx.putImageData(imgData, 0, 0);

    }

  }
  gris.onclick = () => {
    console.log("Clack!");
    ctx.drawImage(img, 0,0);
    colores.classList.add("mystyle")


    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data
    for (let i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
      ctx.putImageData(imgData, 0, 0);
    }
  }

  negativo.onclick = () => {
    console.log("Clack!");
    ctx.drawImage(img, 0,0);
    colores.classList.add("mystyle")


    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data
    for (let i = 0; i < data.length; i+=4) {
      data[i] = 255-data[i];
      data[i+1] = 255-data[i+1];
      data[i+2] = 255-data[i+2];
      ctx.putImageData(imgData, 0, 0);
    }
  }

  sepia.onclick = () => {
    console.log("Clack!");
    ctx.drawImage(img, 0,0);
    colores.classList.add("mystyle")


    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data
    for (let i = 0; i < data.length; i+=4) {
      data[i] = (data[i] * .393) + (data[i+1] * .769) + (data[i+2] * .189);
      data[i+1] = (data[i] * .349) + (data[i+1] * .686) + (data[i+2] * .168);
      data[i+2] = (data[i] * .272) + (data[i+1] * .534) + (data[i+2] * .131);
      ctx.putImageData(imgData, 0, 0);
    }
  }


  espejo.onclick = () => {
    console.log("Clackaaa!");
    colores.classList.add("mystyle");
    ctx.translate(canvas.width,0)
    ctx.scale(-1,1);
    ctx.drawImage(img, 0, 0);
  }

  invertir.onclick = () => {
    console.log("Clackaaa!");
    colores.classList.add("mystyle");
    ctx.translate(0, canvas.height)
    ctx.scale(1,-1);
    ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, 0, 0);

  }
}

img1.onclick = () => {

  img.src = "iceland.jpg"
  imagen();
}

img2.onclick = () => {

  img.src = "sun.jpg"
  imagen();
}

img3.onclick = () => {

  img.src = "city.jpg"
  imagen();
}




console.log("Fin...");
