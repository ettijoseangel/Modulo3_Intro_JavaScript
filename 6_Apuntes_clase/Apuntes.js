//              Apuntes de clase - 10/02/2026

//              1. DOM en JavaScript

// El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML. 
// Permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de una página web utilizando JavaScript.

//              2. Selección de elementos del DOM

// Para seleccionar elementos del DOM, se pueden utilizar varios métodos, como:

// - `getElementById()`: Selecciona un elemento por su ID.
// - `getElementsByClassName()`: Selecciona elementos por su clase.
// - `getElementsByTagName()`: Selecciona elementos por su etiqueta.
// - `querySelector()`: Selecciona el primer elemento que coincide con un selector CSS.
// - `querySelectorAll()`: Selecciona todos los elementos que coinciden con un selector CSS.
// Ejemplo de selección de elementos:

// Seleccionar un elemento por su ID
const elementoPorId = document.getElementById('miElemento');
// Seleccionar elementos por su clase
const elementosPorClase = document.getElementsByClassName('miClase');
// Seleccionar elementos por su etiqueta
const elementosPorEtiqueta = document.getElementsByTagName('p');
// Seleccionar el primer elemento que coincide con un selector CSS
const primerElemento = document.querySelector('.miClase');
// Seleccionar todos los elementos que coinciden con un selector CSS
const todosLosElementos = document.querySelectorAll('.miClase');
//              3. Manipulación del DOM

// Una vez que se han seleccionado los elementos del DOM, se pueden manipular de diversas maneras, como:
// - Cambiar el contenido de un elemento utilizando `innerHTML` o `textContent`.
// - Modificar los atributos de un elemento utilizando `setAttribute()` o accediendo directamente a las propiedades del elemento.
// - Cambiar el estilo de un elemento utilizando la propiedad `style`.
// - Agregar o eliminar clases utilizando `classList`.
// Ejemplo de manipulación del DOM:
// Cambiar el contenido de un elemento
elementoPorId.innerHTML = 'Nuevo contenido';
// Modificar un atributo de un elemento
elementoPorId.setAttribute('data-atributo', 'valor');
// Cambiar el estilo de un elemento
elementoPorId.style.color = 'red';
// Agregar una clase a un elemento
elementoPorId.classList.add('nuevaClase');
// Eliminar una clase de un elemento
elementoPorId.classList.remove('miClase');
//              4. Eventos en el DOM

// Los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón, mover el mouse o cargar una página. 
// Se pueden manejar eventos utilizando JavaScript para ejecutar funciones cuando ocurren ciertos eventos.
// Para manejar eventos, se pueden utilizar métodos como `addEventListener()`, que permite asignar una función a un evento específico de un elemento.
// Ejemplo de manejo de eventos:
// Seleccionar un botón
const boton = document.getElementById('miBoton');
// Agregar un evento de clic al botón
boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
});
//              5. Creación y eliminación de elementos del DOM
// Se pueden crear nuevos elementos del DOM utilizando el método `createElement()`, y luego agregarlos al documento utilizando métodos como `appendChild()` o `insertBefore()`.
// También se pueden eliminar elementos del DOM utilizando el método `removeChild()` o accediendo directamente a la propiedad `parentNode` del elemento y utilizando `removeChild()`.
// Ejemplo de creación y eliminación de elementos del DOM:
// Crear un nuevo elemento
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Soy un nuevo elemento';

// Agregar el nuevo elemento al cuerpo del documento
document.body.appendChild(nuevoElemento);
// Eliminar el nuevo elemento después de 3 segundos
setTimeout(function() {
    document.body.removeChild(nuevoElemento);
}, 3000);
