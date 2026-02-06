// Apuntes de clase 05/02/2026

// Funciones

//Sintaxis general
function nombre_funcion (parametro1, parametro2){
    return "Valor a regresar";
}

//Ejemplo 1: la suma de dos numeros

function suma(a, b){
    return a + b;
}
console.log(suma(2,3));

//Ejemplo 2: Volver a sumar los dos numeros, pero almacenando valores
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}
console.log(sumar(63,3));


//Alcance de las variables (Scope)

//Se le llama Scope **Global**, cuando la variable es accesible desde cualquier parte de un programa
//Se le llama Scope **Local**, cuando la variable solo es llamada dentro del bloque de codigo de una funcion

//Ejemplo de variables locales y globales

const manzanas = 44; //Variable Global

function familia(personas){  //La variable local es "personas"
    let manzana_por_persona = manzanas / personas;
    return console.log("A cada integrante le tocan: " + manzana_por_persona + " manzanas");
}

familia(10);


//Ejemplo de una funcion normal
function funcion_normal(a, b){
    return a + b;
}

//Funcion como variable
const funcion_como_variable = function (a,b){
    return a + b;
}

//Funciones flecha
const funcion_flecha = (a,b) => {
    //console.log(a);
    //console.log(b);
    //...
    return a + b;
}

//Funciones con una sola linea se simplifican
const funcion_simplificada = (a,b) => a + b;

//Funciones con un solo parametro no necesitan parentesis
const funcion_un_parametro = a => a*a;

console.log(funcion_normal(2,3));
console.log(funcion_como_variable(4,3));
console.log(funcion_flecha(5,3));
console.log(funcion_simplificada(5,5));
console.log(funcion_un_parametro(10));


//Se recomienda usar const para las funciones para que las funcioones no tengan un comportamiento extraño

//Retos en la clase

let x = 2;
let y = 3;
let z = 4;

const func = (a,b,c) => {
    x = 1;
    b = 2;
    return a + b + c + x ;
}

console.log(func(x,y,z) + func(func(0,0,1), 1, 1));


//Reto 2

let a = "a";
let b = "b";
let c = "c";

let fun1 = (v1, v2, v3) => {
    //console.log(v1, v2, v3);
    if (v1 === "m"){
        return "k";
    } else {
        return fun1("m", v1 + v2, v3);
    }
}

let fun2 = (v1, v2, v3) => {
    return fun1(b, fun1(v1 + v2), v3);
}

console.log(fun1(a, b, c) + fun2(a, b, c));

//Reto 3

let rec = (x) => {
    if (x % 2 == 0){
        return x + 1;
    } else {
        return rec(x + 2);
    }
}
console.log(rec(5));