//Apuntes de clase 29/01/2026

//Tema: var, let, const.

// 1. var
var nombre = "Tulipano";
//Es exactamente lo mismo que:
nombre = "Tulipano";
//En el caso del var, se recomienda no usarlo por temas de alcance (scope).

// 2. let 
let apellido = "Rosas";
//Es usado para variables que pueden cambiar su valor

// 3. const
const ciudad_origen = "San Luis Potosí";
//Es usado para valores que no cambian su valor

//Operadores básicos
// Aritméticos: +, -, *, /, %
// Asignación: =
// Asignacion combinados: +=, -=, *=, /=
// Comparación: ==, ===, !=, !==, >, <, >=, <=
// Lógicos: &&, ||, !

//Suma de valores
let suma = 5 + 3; //8

//Resta de valores
let resta = 10 - 4; //6

//Multiplicación de valores
let multiplicacion = 6 * 7; //42

//División de valores
let division = 20 / 5; //4

//Módulo (residuo de una división)
let modulo = 10 % 3; //1

//Potencia (Exponente)
let potencia = 2 ** 3; //8

//Combinación de operadores
let resultado = (5 + 3) * 2 - 4 / 2; //14

//Suma e igual +=
let operacion = 10;
operacion += 5; // operacion ahora es 15

// ***** la operacion tambien puede ser escrito como: ******
// operacion = operacion + 5; ---> operacion ahora es 20

// Resta e igual -=
let operacionResta = 20;
operacionResta -= 4; // operacionResta ahora es 16

// ***** la operacion tambien puede ser escrito como: ******
// operacionResta = operacionResta - 4; ---> operacionResta ahora es 12

//Operadores de comparacion

//Igualdad debil ==
console.log(5 == '5'); // true

//Igualdad estricta ===
console.log(5 === '5'); // false

//Desigualdad debil !=
console.log(5 != '5'); // false

//Desigualdad estricta !==
console.log(5 !== '5'); // true

//Mayor que >
console.log(10 > 5); // true

//Menor que <
console.log(3 < 7); // true

//Mayor o igual que >=
console.log(8 >= 8); // true

//Menor o igual que <=
console.log(4 <= 6); // true

//Operadores lógicos

//AND lógico &&
console.log(true && false); // false

//OR lógico ||
console.log(true || false); // true

//NOT lógico !
console.log(!true); // false


//Condicionales
// Estructura if
let edad = 20;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

// Estructura if-else (tomando como base la variable edad)
if (edad < 18) {
    console.log("Eres menor de edad.");
} else {
    console.log("Eres mayor de edad.");
}

// Estructura if-else if-else
if (edad < 13) {
    console.log("Eres un niño.");
}
else if (edad >= 13 && edad < 20) {
    console.log("Eres un adolescente.");
} else {
    console.log("Eres un adulto.");
}

// If anidado
//Ejemplo: Verificar si una persona es mayor de edad y si tiene licencia de conducir
let tieneLicencia = true;
if (edad >= 18) {
    if (tieneLicencia) {
        console.log("Puedes conducir.");
    } else {
        console.log("No puedes conducir sin licencia.");
    }
} else {
    console.log("Eres menor de edad, no puedes conducir.");
}


//  ****************NOTA***************

// para  ejecutar este archivo, usar el comando:
// node 2_Comparaciones_decisiones.js
