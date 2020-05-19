console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizador = document.getElementById('deslizador');
const deslizador2 = document.getElementById('deslizador2');
const deslizador3 = document.getElementById('deslizador3');

//-- Valor del deslizador
const range_value = document.getElementById('range_value');
const range_value2 = document.getElementById('range_value2');
const range_value3 = document.getElementById('range_value3');


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

//-- Funcion de retrollamada del deslizador
deslizador.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador rojo
  range_value.innerHTML = deslizador.value;
  //-- Mostrar el nuevo valor del deslizador verde
  range_value2.innerHTML = deslizador2.value;
  //-- Mostrar el nuevo valor del deslizador azul
  range_value3.innerHTML = deslizador3.value;

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
    else if(data[i] < umbral && data[i] < 255)
      data[i] = umbral;
  }



  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

}


deslizador2.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador2
  range_value2.innerHTML = deslizador2.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador2.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+1] > umbral)
      data[i+1] = umbral;
    else if(data[i+1] < umbral && data[i+1] < 255)
      data[i+1] = umbral;
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

}



deslizador3.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador3
  range_value3.innerHTML = deslizador3.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador3.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i+2] > umbral)
      data[i+2] = umbral;
    else if(data[i+2] < umbral && data[i+2] < 255)
      data[i+2] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);

}


console.log("Fin...");
