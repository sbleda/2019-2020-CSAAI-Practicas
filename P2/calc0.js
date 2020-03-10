console.log("Ejecutando JS...");


console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
multiplicacion = document.getElementById("multiplicacion")
igual = document.getElementById("igual")
clear = document.getElementById("clear")



let digitos = document.getElementsByClassName("cdigito");  //me va a crear un array de digitos con todos los que tengo en el html

for(i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev) =>{  //digitos[i] es el boton
    digito(ev.target) // ev=evento, ev.target=me da el valor del boton que ha sido pulsado
  }
}

function digito(boton){  //al tener esta funcion, no tengo que repetir el mismo codigo para cada boton
  if (display.innerHTML=="0"){
    display.innerHTML=boton.value; //asi machaca el cero si esta
  } else{
  display.innerHTML += boton.value;
  }
}

let ops = document.getElementsByClassName("operaciones");  //me va a crear un array de digitos con todos los que tengo en el html

for(i=0; i<ops.length; i++){
  ops[i].onclick = (ev) =>{  //digitos[i] es el boton
    digito(ev.target) // ev=evento, ev.target=me da el valor del boton que ha sido pulsado
  }
}

function operacion(botonop){
  display.innerHTML += botonop.value;
}



//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
