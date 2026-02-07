//Proyecto: Funciones en JavaScript

//Problema: Seguimiento de Libros

//Crea un sistema muy sencillo para hacer seguimiento de los libros que has leido.

//1. Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
//2. Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

// Solución:

//Paso 1: Crear el array (vacio) para almacenar los libros leidos
const librosLeidos = [];

//Paso 2: Crear la función para agregar libros
function agregarLibro(titulo){
    //Agrega el libro al array a traves del metodo push
    librosLeidos.push(titulo);
    return console.log("Libro agregado: " + titulo);
}

//Paso 3: Crear la función para mostrar los libros leidos
function mostrarLibrosLeidos(){
    //Imprime los libros leidos utilizando el metodo join para unir los elementos del array en una cadena de texto
    return console.log("Libros leidos: " + librosLeidos.join(", "));
}


//Ejemplo de uso
//Agregamos algunos libros al sistema
agregarLibro("El Quijote");
agregarLibro("Cien Años de Soledad");
agregarLibro("1984");
agregarLibro("El Principito");

//Mostramos los libros leidos
mostrarLibrosLeidos();
