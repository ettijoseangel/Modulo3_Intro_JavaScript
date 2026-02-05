//Tercera práctica: Arreglos y ciclos

//Problema: Clasificación de Frutas
//Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// Solución con el ciclo For:

//Paso 1: Definir un arreglo con diferentes frutas
let frutas = ["Manzana", "Banana", "Cereza", "Manzana", "Uva", "Banana", "Durazno", "Cereza", "Manzana", "Kiwi"];

//Paso 2: Crear un objeto para almacenar el conteo de cada tipo de fruta
let conteoFrutas = {};

//Paso 3: Creamos un ciclo For para iniciar el contador
for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i]; // Obtener la fruta actual del arreglo

    //Paso 4: Verificar si la fruta ya está en el objeto conteoFrutas
    if (conteoFrutas[frutaActual]) {
        conteoFrutas[frutaActual] += 1; // Si ya existe, incrementamos el contador
    } else {
        conteoFrutas[frutaActual] = 1; // Si no existe, la inicializamos en 1
    }
}

//Paso 5: Mostrar el resultado en la consola
console.log("Conteo de frutas:", conteoFrutas);

// Otra forma de mostrar el resultado
for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}


//Solución con el ciclo While:

//Paso 1: Definir un arreglo con diferentes frutas
let frutasArreglo = ["Manzana", "Banana", "Cereza", "Manzana", "Uva", "Banana", "Durazno", "Cereza", "Manzana", "Kiwi"];

//Paso 2: Crear un objeto para almacenar el conteo de cada tipo de fruta
let contadorFrutas = {};

let j = 0; // Inicialización de la variable de control
while (j < frutasArreglo.length) { // Condición para el ciclo
    let fruta_actual = frutasArreglo[j]; // Obtener la fruta actual del arreglo

    //Paso 4: Verificar si la fruta ya está en el objeto contadorFrutas
    if (contadorFrutas[fruta_actual]) {
        contadorFrutas[fruta_actual] += 1; // Si ya existe, incrementamos el contador
    } else {
        contadorFrutas[fruta_actual] = 1; // Si no existe, la inicializamos en 1
    }

    j = j + 1; // Actualización de la variable de control **IMPORTANTE: Aumentar el índice para pasar a la siguiente fruta
}

//Paso 5: Mostrar el resultado en la consola
console.log("Conteo de frutas usando While:", contadorFrutas);

// Otra forma de mostrar el resultado
for (let fruta in contadorFrutas) {
    console.log(fruta + ": " + contadorFrutas[fruta]);
}