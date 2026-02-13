// Apuntes de clase - 10/02/2026

//              1. Objetos en JavaScript

//La sintaxis es la siguiente:

//     let objeto = {
//         propiedad1: valor1,
//         propiedad2: valor2,
//         ...
//     }

// Ejercicio: Crear un objeto que represente a una persona con sus propiedades y métodos

let persona = {
    nombre: "Juan", // Propiedad de nombre
    edad: 30, // Propiedad de edad
    profesion: "Desarrollador", // Propiedad de profesión
}

//Imprimir las propiedades del objeto persona
console.log(persona);

//Accediendo al nombre de la persona
console.log("El nombre de la persona es: " + persona.nombre);
//Accediendo a la edad de la persona
console.log("La edad de la persona es: " + persona.edad);
//Accediendo a la profesión de la persona
console.log("La profesión de la persona es: " + persona.profesion);

//Otra forma de acceder a las propiedades del objeto persona
console.log("El nombre de la persona es: " + persona["nombre"]);
console.log("La edad de la persona es: " + persona["edad"]);
console.log("La profesión de la persona es: " + persona["profesion"]);

//Manipulando edad de la persona
console.log("Cumpleaños de la persona: ", 2026 - persona.edad); // Calculando el año de nacimiento de la persona

//Agregando telefono a la persona
persona.telefono = "123-456-7890"; // Agregando una nueva propiedad al objeto persona
console.log("El teléfono de la persona es: " + persona.telefono);




//                             2. Metodos y this en objetos
//Podemos guardar funciones dentro de un objeto, a estas funciones se les llama métodos. El valor de this dentro de un método hace referencia al objeto al que pertenece el método.

//Ejemplo:

let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    info(){
        //Primera forma de acceder a las propiedades del objeto libro usando this
        console.log("El libro " + this.titulo + " fue escrito por " + this.autor);

        //Existe una segunda forma para concatenar los datos es haciendo uso de las comas
        console.log("El libro ", this.titulo, " fue escrito por ", this.autor);            

        //Segunda forma de acceder a las propiedades del objeto libro sin usar this
        console.log("El libro " + libro.titulo + " fue escrito por " + libro.autor);

        //Tercera forma de acceder a las propiedades del objeto libro usando this con template literals
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor}`);
    }
   
};

//La diferencia entre la coma y el signo de la suma para concatenar 
// es que la coma agrega un espacio automáticamente entre los elementos, 
// mientras que el signo de suma no lo hace, por lo que si queremos agregar un espacio usando el signo de suma, 
// debemos incluirlo explícitamente como parte de la cadena (por ejemplo, "El libro " + this.titulo + " fue escrito por " + this.autor).

//El "this" apunta al objeto libro, por lo que podemos acceder a sus propiedades usando this.titulo y this.autor dentro del método info().

// Para iterar las propiedades de un objeto, podemos usar un ciclo for...in. 
// Este ciclo nos permite recorrer todas las propiedades enumerables de un objeto.

//Ejemplo de un objeto estudiante y cómo usar for...in para mostrar sus propiedades y valores:

let estudiante = {
    nombre: "Ana",
    apellido: "García",
    edad: 22,
    carrera: "Ingeniería"
};

for (let key in estudiante) {
    console.log(`La llave es: ${key} y el valor es: ${estudiante[key]}`);
}

//El ciclo for es equivalente a esto>
console.log(`La llave es: ${"nombre"} y el valor es: ${estudiante["nombre"]}`);
console.log(`La llave es: ${"apellido"} y el valor es: ${estudiante["apellido"]}`);
console.log(`La llave es: ${"edad"} y el valor es: ${estudiante["edad"]}`);
console.log(`La llave es: ${"carrera"} y el valor es: ${estudiante["carrera"]}`);

//Explicación del ciclo for...in:
// 1. Declaramos una variable key que representará cada propiedad del objeto estudiante en cada iteración.
// 2. El ciclo for...in recorre todas las propiedades enumerables del objeto estudiante.
// 3. En cada iteración, imprimimos la llave (key) y su valor correspondiente (estudiante[key]) usando template literals para formatear la salida.
// 4. El ciclo continuará hasta que se hayan recorrido todas las propiedades del objeto estudiante.



//                            3. Objetos anidados y desestructuración

//Un objeto puede contemer mas objetos:

const empresa = {
    nombre: "Tech Solutions",
    empleados: { jefe: "Carlos" }
};

console.log(`La empresa se llama ${empresa.nombre} y su jefe es ${empresa.empleados.jefe}`);

//Desestructuración de objetos

//La desestructuración es una forma de extraer valores de un objeto y asignarlos a variables de manera más concisa. 
//En lugar de acceder a cada propiedad del objeto usando la notación de punto, 
// podemos usar la sintaxis de desestructuración para asignar directamente las propiedades a variables.

//Ejemplo de desestructuración de objetos:

const persona1 = {
    nombre: "Laura",
    edad: 28
};

const { nombre } = persona1; // Desestructuración del objeto persona
console.log(`El nombre de la persona es: ${nombre}`); // Imprime "El nombre de la persona es: Laura"

//Estp es equivalente a esto

const persona2 = {
    primer_nombre: "Laura",
    edad: 28
};

const primer_nombre = persona2.primer_nombre; // Asignación tradicional
console.log(`El primer nombre de la persona es: ${primer_nombre}`); // Imprime "El primer nombre de la persona es: Laura"


//Retos

const avengers = [
    {
    name: "Iron Man",
    age: 48,
    movies: ["Iron Man", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Captain America",
    age: 101,
    movies: [
      "Captain America: The First Avenger",
      "The Avengers",
      "Avengers: Endgame",
    ],
  },
  {
    name: "Thor",
    age: 1500,
    movies: ["Thor", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Black Widow",
    age: 35,
    movies: ["Iron Man 2", "The Avengers", "Avengers: Endgame"],
  },
];

//Acceder a la segunda pelicula de Thor
console.log(avengers[2].movies[1]); 


const rocky_movies = {
    "Rocky": {
    "year": 1976,
    "director": "John G. Avildsen"
    },
    "Rocky II": {
    "year": 1979,
    "director": "Sylvester Stallone"
    },
    "Rocky III": {
    "year": 1982,
    "director": "Sylvester Stallone"
    }
};

//Obtener el año de grabacion de Rocky III
console.log(rocky_movies["Rocky III"].year);

//Otra forma de obtener el año de grabacion de Rocky III
console.log(rocky_movies["Rocky III"]["year"]);


// Objeto de la tierra con continentes, paises, estados y ciudades

const tierra = { 

    continentes: {
        America: {
            Mexico: {
                estados: ["CDMX", "Guadalajara", "Monterrey", "SLP"],
      },
            USA: {
                estados: ["California", "Texas", "Florida", "New York"],
      },
        },
        Europa: {
            España: {
                ciudades: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
      },
            Francia: {
                ciudades: ["París", "Lyon", "Marsella", "Niza"],
      },
        },
    },
    

    //Metodo para obtener los continentes
    obtenerContinentes(){
        //Obtener los continentes de la tierra 
        for (let continente in this.continentes) {
            console.log("Continente: " + continente);
        }
    },

    //Metodo para obtener los paises
    obtenerPaises(){
        //Obtener los paises de cada continente
        for (let continente in this.continentes) {
            console.log("Continente: " + continente);
            for (let pais in this.continentes[continente]) {
                console.log("Pais: " + pais);
            }
        }
    },
    
    //Metodo para obtener los estados
    obtenerEstados(){
        //Obtener los estados de cada pais
        for (let continente in this.continentes) {
            console.log("Continente: " + continente);
            for (let pais in this.continentes[continente]) {
                console.log("Pais: " + pais);
                if (this.continentes[continente][pais].estados) {
                    for (let estado of this.continentes[continente][pais].estados) {
                        console.log("Estado: " + estado);
                    }
                }
            }
        }
    },

    //Metodo para obtener las ciudades
    obtenerCiudades(){
        //Obtener las ciudades de cada pais
        for (let continente in this.continentes) {
            console.log("Continente: " + continente);
            for (let pais in this.continentes[continente]) {
                console.log("Pais: " + pais);
                if (this.continentes[continente][pais].ciudades) {
                    for (let ciudad of this.continentes[continente][pais].ciudades) {
                        console.log("Ciudad: " + ciudad);
                    }
                }
            }
        }
    }
};

//Obtener los continentes de la tierra
tierra.obtenerContinentes();

//Obtener los paises de la tierra
tierra.obtenerPaises();    

//Obtener los estados de la tierra
tierra.obtenerEstados();

//Obtener las ciudades de la tierra
tierra.obtenerCiudades();


