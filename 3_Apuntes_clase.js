//Ciclo while - Apuntes de clase 03/02/2026

// Ejercicio: Imprimir 5 veces mi nombre en la consola usando un ciclo while

let i = 0; // Inicialización de la variable de control

if (i < 5) { // Condición para entrar al ciclo
    console.log("Mi nombre es Juan Pérez"); // Acción a repetir
    i = i + 1; // Actualización de la variable de control
}

// Nota: El código anterior solo imprime el nombre una vez debido a la estructura if.
// Para que el nombre se imprima 5 veces, debemos usar un ciclo while como se muestra a continuación:

let j = 0; // Inicialización de la variable de control

while (j < 5) { // Condición para el ciclo
    console.log("Mi nombre es Juan Pérez"); // Acción a repetir
    j = j + 1; // Actualización de la variable de control
}

// Explicación:
// 1. Inicializamos una variable j en 0.
// 2. Usamos un ciclo while que continuará ejecutándose mientras j sea menor que 5.
// 3. Dentro del ciclo, imprimimos el nombre y luego incrementamos j en 1.
// 4. El ciclo se repetirá hasta que j alcance el valor de 5, momento en el cual la condición dejará de cumplirse y el ciclo terminará.


//Ciclo For - Apuntes de clase 03/02/2026

// Ejercicio: Imprimir 5 veces mi nombre en la consola usando un ciclo for

for (let k = 0; k < 5; k++) { // Inicialización; Condición; Actualización
    console.log("Mi nombre es Juan Pérez"); // Acción a repetir
}

// Explicación:
// 1. El ciclo for consta de tres partes: inicialización, condición y actualización.
// 2. Inicializamos la variable k en 0.
// 3. La condición k < 5 determina que el ciclo continuará mientras k sea menor que 5.
// 4. Después de cada iteración, k se incrementa en 1 (k++).
// 5. Dentro del ciclo, imprimimos el nombre.
// 6. El ciclo se repetirá hasta que k alcance el valor de 5, momento en el cual la condición dejará de cumplirse y el ciclo terminará.

//Ejercicio adicional: Sumar los números del 1 al 10 usando un ciclo for

let sumaTotal = 0; // Variable para almacenar la suma
for (let n = 1; n <= 10; n++) { // Inicialización; Condición; Actualización
    sumaTotal += n; // Sumar el valor de n a sumaTotal
}
console.log("La suma total del 1 al 10 es: " + sumaTotal); // Imprimir el resultado

// Explicación:
// 1. Inicializamos una variable sumaTotal en 0 para almacenar la suma de los números.
// 2. Usamos un ciclo for que itera desde 1 hasta 10.
// 3. En cada iteración, sumamos el valor actual de n a sumaTotal.
// 4. Al finalizar el ciclo, imprimimos el resultado de la suma total.


//Arreglos - Apuntes de clase 03/02/2026
// Ejercicio: Crear un arreglo de frutas y mostrar cada fruta en la consola

let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"]; // Definición del arreglo

for (let p = 0; p < frutas.length; p++) { // Ciclo para recorrer el arreglo
    console.log(frutas[p]); // Mostrar cada fruta
}

// Explicación:
// 1. Definimos un arreglo llamado frutas que contiene una lista de frutas.
// 2. Usamos un ciclo for para recorrer el arreglo desde el índice 0 hasta la longitud del arreglo (frutas.length).
// 3. En cada iteración, imprimimos la fruta correspondiente al índice actual p.
// 4. El ciclo continúa hasta que todas las frutas hayan sido mostradas en la consola.

//Metodos de arreglos 

// Ejercicio: Usar métodos de arreglos para manipular una lista de números
let numeros = [10, 20, 30, 40, 50]; // Definición del arreglo

// Método push: Agregar un número al final del arreglo
numeros.push(60);
console.log("Después de push: " + numeros); // [10, 20, 30, 40, 50, 60]

// Método pop: Eliminar el último número del arreglo
numeros.pop();
console.log("Después de pop: " + numeros); // [10, 20, 30, 40, 50]

// Método shift: Eliminar el primer número del arreglo
numeros.shift();
console.log("Después de shift: " + numeros); // [20, 30, 40, 50]

// Método unshift: Agregar un número al inicio del arreglo
numeros.unshift(5);
console.log("Después de unshift: " + numeros); // [5, 20, 30, 40, 50]

// Método indexOf: Encontrar el índice de un número en el arreglo
let indice = numeros.indexOf(30);
console.log("El índice de 30 es: " + indice); // 2

// Método splice: Eliminar elementos del arreglo
numeros.splice(1, 2); // Elimina 2 elementos a partir del índice 1
console.log("Después de splice: " + numeros); // [5, 40, 50]

// Método slice: Crear una copia de una parte del arreglo
let copia = numeros.slice(0, 2); // Copia los elementos desde el índice 0 hasta el 2 (no incluido)
console.log("Copia del arreglo: " + copia); // [5, 40]