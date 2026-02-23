//Seleccionamos los elementos del DOM
const generate_btn = document.querySelector('.generate-btn'); //Botón para generar la contraseña
const password_display = document.getElementById('password'); //Elemento donde se muestra la contraseña generada
const length_input = document.getElementById('length'); //Input para seleccionar la longitud de la contraseña
const length_label = document.getElementById('length-label'); //Label que muestra la longitud seleccionada

//Elementos de tipo checkbox
const uppercase_checkbox = document.getElementById('uppercase'); //Checkbox para incluir mayúsculas
const lowercase_checkbox = document.getElementById('lowercase'); //Checkbox para incluir minúsculas
const numbers_checkbox = document.getElementById('numbers'); //Checkbox para incluir números
const symbols_checkbox = document.getElementById('symbols'); //Checkbox para incluir símbolos

//Primera funcion: Actualizar el label de la longitud cada vez que el usuario cambie el valor del input
length_input.addEventListener('input', () => {
    length_label.textContent = `${length_input.value}`; //Actualizamos el texto del label con la longitud seleccionada
});

//Segunda función: Generar la contraseña dependiendo de las opciones seleccionadas por el usuario
const generatePassword = (lenght, uppercase, lowercase, numbers, symbols) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //Caracteres mayúsculas
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'; //Caracteres minúsculas
    const numberChars = '0123456789'; //Caracteres números
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='; //Caracteres símbolos

    let characters = ''; //Variable que almacenará los caracteres a usar para generar la contraseña

    //Dependiendo de las opciones seleccionadas por el usuario, se van agregando los caracteres correspondientes a la variable "characters"
    if (uppercase) characters += uppercaseChars; //Si el usuario seleccionó incluir mayúsculas, se agregan los caracteres mayúsculas a la variable "characters"
    if (lowercase) characters += lowercaseChars; //Si el usuario seleccionó incluir minúsculas, se agregan los caracteres minúsculas a la variable "characters"
    if (numbers) characters += numberChars; //Si el usuario seleccionó incluir números, se agregan los caracteres números a la variable "characters"
    if (symbols) characters += symbolChars; //Si el usuario seleccionó incluir símbolos, se agregan los caracteres símbolos a la variable "characters" 

    //Si no selecciona nada, devuelve una alerta
    if (characters.length === 0) { //Si la variable "characters" está vacía, significa que el usuario no seleccionó ninguna opción para generar la contraseña
        alert('Por favor, selecciona al menos una opción para generar la contraseña.'); //Si el usuario no seleccionó ninguna opción, se muestra una alerta
        return ''; //Se devuelve una cadena vacía para evitar generar una contraseña sin caracteres
    }

    //Si no selecciona una longitud mayor a 0, devuelve una alerta
    if (length_input.value <= 0) { //Si el valor del input de longitud es menor o igual a 0, significa que el usuario no seleccionó una longitud válida para generar la contraseña
        alert('Por favor, selecciona una longitud mayor a 0 para generar la contraseña.'); //Si el usuario no seleccionó una longitud válida, se muestra una alerta
        return ''; //Se devuelve una cadena vacía para evitar generar una contraseña sin longitud
    }

    let password = ''; //Variable que almacenará la contraseña generada
    for (let i = 0; i < lenght; i++) { //Bucle que se ejecuta "lenght" veces, donde "lenght" es la longitud de la contraseña seleccionada por el usuario    
        const randomIndex = Math.floor(Math.random() * characters.length); //Generamos un índice aleatorio para seleccionar un carácter de la variable "characters"
        password += characters[randomIndex]; //Agregamos el carácter seleccionado a la variable "password"
    }

    return password; //Devolvemos la contraseña generada
};

//Tercera función: Evento click para generar la contraseña al hacer clic en el botón
generate_btn.addEventListener('click', () => {
    const length = parseInt(length_input.value); //Obtenemos la longitud seleccionada por el usuario y la convertimos a un número entero
    const uppercase = uppercase_checkbox.checked; //Obtenemos el estado del checkbox de mayúsculas
    const lowercase = lowercase_checkbox.checked; //Obtenemos el estado del checkbox de minúsculas
    const numbers = numbers_checkbox.checked; //Obtenemos el estado del checkbox de números
    const symbols = symbols_checkbox.checked; //Obtenemos el estado del checkbox de símbolos    
    const password = generatePassword(length, uppercase, lowercase, numbers, symbols); //Generamos la contraseña llamando a la función "generatePassword" con los parámetros correspondientes
    password_display.value = password; //Mostramos la contraseña generada en el elemento "password_display"
});

//Cuarta funcion: Barras de fuerza de la contraseña
const actualizarStrengthMeter = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked'); //Seleccionamos todos los checkboxes del formulario que están marcados
    const barras = document.querySelectorAll('.barra'); //Seleccionamos todas las barras de fuerza
    const strengthTexto = document.getElementById('strength-level'); //Seleccionamos el elemento donde se muestra el texto de la fuerza de la contraseña

    //1. Reseteamos las barras de fuerza
    barras.forEach(barra => {
        barra.style.backgroundColor = "transparent"; //Reseteamos el color de fondo de cada barra a transparente
        barra.style.borderColor = "var(--almost-white)"; //Reseteamos el color del borde de cada barra al color original
    });

    //2 Dependiendo de la cantidad de checkboxes marcados, se van llenando las barras de fuerza
    const cantidad = checkboxes.length; //Obtenemos la cantidad de checkboxes marcados

    if (cantidad === 1) {
        barras[0].style.backgroundColor = "var(--red)"; //Si hay 1 checkbox marcado, se llena la primera barra de fuerza con color rojo
        strengthTexto.textContent = "MUY DÉBIL"; //Actualizamos el texto de la fuerza a "MUY DÉBIL"
    } else if (cantidad === 2) {
        barras[0].style.backgroundColor = "var(--orange)"; //Si hay 2 checkboxes marcados, se llena la primera barra de fuerza con color naranja
        barras[1].style.backgroundColor = "var(--orange)"; //Se llena la segunda barra de fuerza con color naranja
        strengthTexto.textContent = "DÉBIL"; //Actualizamos el texto de la fuerza a "DÉBIL"
    } else if (cantidad === 3) {
        barras[0].style.backgroundColor = "var(--yellow)"; //Si hay 3 checkboxes marcados, se llena la primera barra de fuerza con color amarillo
        barras[1].style.backgroundColor = "var(--yellow)"; //Se llena la segunda barra de fuerza con color amarillo
        barras[2].style.backgroundColor = "var(--yellow)"; //Se llena la tercera barra de fuerza con color amarillo
        strengthTexto.textContent = "MEDIA"; //Actualizamos el texto de la fuerza a "MEDIA"
    } else if (cantidad === 4) {
        barras.forEach(barra => {
            barra.style.backgroundColor = "var(--green)"; //Si hay 4 checkboxes marcados, se llenan todas las barras de fuerza con color verde
        });
        strengthTexto.textContent = "FUERTE"; //Actualizamos el texto de la fuerza a "FUERTE"
    } else {
        strengthTexto.textContent = "FUERZA: "; //Si no hay ningún checkbox marcado, se muestra el texto original sin fuerza
    }
};

//Agregamos el evento "change" a cada checkbox para actualizar la barra de fuerza cada vez que el usuario marque o desmarque una opción
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); //Seleccionamos todos los checkboxes del formulario
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarStrengthMeter); //Agregamos el evento "change" a cada checkbox para llamar a la función "actualizarStrengthMeter" cada vez que el usuario marque o desmarque una opción
});

//Quinta función: Copiar la contraseña al portapapeles
const copy_btn = document.querySelector('.copy-btn'); //Seleccionamos el botón de copiar
copy_btn.addEventListener('click', () => {
    const password = password_display.value; //Obtenemos la contraseña que se muestra en el elemento "password_display"
    if (password) { //Si hay una contraseña generada (es decir, si el valor no está vacío)
        navigator.clipboard.writeText(password) //Copiamos la contraseña al portapapeles utilizando la API de Clipboard
            .then(() => {
                const icon = copy_btn.querySelector('.material-symbols-outlined'); //Seleccionamos el ícono dentro del botón de copiar
                const colorOriginal = icon.style.color; //Guardamos el color original del ícono para poder restaurarlo después

                icon.style.color = 'var(--almost-white)'; //Cambiamos el color del ícono a blanco para indicar que se ha copiado la contraseña
                // Ylo regresamos a su color original después de 1 segundo
                setTimeout(() => {
                    icon.style.color = colorOriginal; //Restauramos el color original del ícono después de 1 segundo
                }, 1000);
            })
            .catch(err => {
                alert('Error al copiar la contraseña: ', err); //Si hubo un error al copiar la contraseña, se muestra una alerta de error
            });
    } else {
        alert('No hay contraseña para copiar'); //Si no hay una contraseña generada, se muestra una alerta indicando que no hay nada para copiar
    }
});