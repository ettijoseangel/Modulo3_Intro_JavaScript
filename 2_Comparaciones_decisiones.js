//Práctica 2: Comparaciones y decisiones en JavaScript

/* Problema: Crea un programa que evalúe la nota de un estudiante 
    y genere personalizado basado en la nota. Las notas son:
    - Si la nota es 90 o más, el estudiante aprueba como "Excelente".
    - Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    - Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    - Si la nota es menor de 60, el estudiante no aprueba.

*/

// Paso 1: Definir la nota del estudiante en una variable
let nota = 59;

// Paso 2: Mediante un if, validamos si nota es mayor a 0
if (nota > 0) {
    // Paso 3: Usar else-if para evaluar la nota y generar el mensaje correspondiente
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Suficiente");
    } else {
        console.log("No aprueba");
    }
} else {
    console.log("La nota debe ser un valor positivo.");
}
