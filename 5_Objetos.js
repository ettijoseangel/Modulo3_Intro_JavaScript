//Quinta práctica: Objetos en JavaScript

//Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

// 1. Cada libro debe ser un objeto con las siguientes propiedades: 
// titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

// 2. También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. 
//    Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// 3. Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro

// Solución:

//Paso 1: Crear el objeto libro con las propiedades y el método describirLibro
let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",
    listaCapitulos: [], // Propiedad para almacenar los capítulos del libro

    //Método para describir el libro
    describirLibro(){
        console.log("Libro titulado", this.titulo, ", escrito por", this.autor, "en el año", this.anio, ", el estado es:", this.estado);
    },

    //Método para agregar un capítulo al libro
    agregarCapitulo(capitulo){
        this.listaCapitulos.push(capitulo);
        console.log("Capítulo agregado:",  capitulo);
    },

    //Método para eliminar un capítulo del libro
    eliminarCapitulo(capitulo){
        //Busca el índice del capítulo en la lista de capítulos
        const index = this.listaCapitulos.indexOf(capitulo);

        //Si el capítulo existe en la lista, lo elimina usando el método splice
        if (index !== -1) {
            this.listaCapitulos.splice(index, 1);
            console.log("Capítulo eliminado:", capitulo);
            //Si el capítulo no se encuentra en la lista, muestra un mensaje indicando que no se encontró el capítulo
        } else {
            console.log("Capítulo no encontrado:", capitulo);
        }
    }
}
//Ejemplo de uso del método describirLibro
libro.describirLibro();

//Ejemplo de uso de los métodos para agregar y eliminar capítulos
libro.agregarCapitulo("Capítulo 1: El inicio de la aventura");
libro.agregarCapitulo("Capítulo 2: El encuentro con Sancho Panza");
console.log("Lista de capítulos: ", libro.listaCapitulos.join(", "));
