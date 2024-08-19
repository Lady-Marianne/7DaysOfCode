// Lógica JS 1/7: Operaciones Booleanas:

let numeroUno = 1;
let stringUno = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

if (numeroUno == stringUno) {
  console.log ('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes.');
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor.');
}

if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo.');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo.');
}

if (numeroDiez == stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes.');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor.');
}


// Lógica JS 2/7: Variables:

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}.`);

let gustoPorLenguaje = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO:`);

if (gustoPorLenguaje == '1') {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (gustoPorLenguaje == '2') {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Respuesta no válida. Por favor, ingresa 1 para SÍ o 2 para NO.");
}

// Lógica JS 3/7: Estructuras de control de flujo:

const area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:");
lenguaje = "";
if (area === "Front-End") {
    lenguaje = prompt("¿Quieres aprender React o Vue?");
} else if (area === "Back-End") {
    lenguaje = prompt("¿Quieres aprender C# o Java?");
} else {
    alert("¡No ingresaste un área válida!");
}

const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte para convertirte en Fullstack");
if (especialidadOFullstack == 1) {
    alert("¡Sigue especializándote en ${lenguaje} para dominar el área de ${area}!");
} else if (especialidadOFullstack == 2) {
    alert("¡Es hora de comenzar a aprender otros lenguajes además de ${lenguaje} si quieres convertirte en Fullstack!");
} else {
    alert("¡No ingresaste un valor válido!");
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál?");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}

// Lógica JS 4/7: Mas loops y randomización:

const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert("¡Felicidades, acertaste! El número era ${numeroAdivinacion}.");
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!");
}

// Lógica JS 5/7: Arrays y colecciones:

// DÍA 6:

//  DÍA 7:
