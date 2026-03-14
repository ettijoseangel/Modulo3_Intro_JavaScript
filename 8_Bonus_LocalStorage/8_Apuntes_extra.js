/**
 * 📝 APUNTES: LOCAL STORAGE EN JAVASCRIPT
 * * ¿Qué es? Es una base de datos pequeña en tu navegador que permite 
 * guardar datos de manera persistente (no se borran al cerrar la pestaña).
 */

// --- 1. GUARDAR DATOS (setItem) ---
// Se guarda como un par "clave" y "valor".
// IMPORTANTE: LocalStorage solo guarda TEXTO (strings).
localStorage.setItem('usuario', 'Alex');
localStorage.setItem('tema', 'oscuro');

console.log("✅ Datos guardados.");


// --- 2. LEER DATOS (getItem) ---
// Usamos la clave para recuperar el valor.
const nombreUsuario = localStorage.getItem('usuario');
console.log("👤 Usuario recuperado:", nombreUsuario);


// --- 3. ELIMINAR DATOS (removeItem / clear) ---
// Para borrar algo específico:
localStorage.removeItem('tema'); 

// Para borrar TODO lo que haya en LocalStorage de tu sitio:
// localStorage.clear(); 
console.log("🗑️ Tema eliminado.");


// --- 4. EL TRUCO PARA OBJETOS Y ARRAYS ---
// Como solo acepta texto, si intentas guardar un objeto directamente, 
// se guardará como "[object Object]", lo cual no sirve de nada.

const configuracion = {
    idioma: 'es',
    notificaciones: true,
    volumen: 80
};

// ❌ MAL: localStorage.setItem('config', configuracion);

// ✅ BIEN: Convertirlo a JSON (un string con formato especial)
localStorage.setItem('config', JSON.stringify(configuracion));

// Para recuperarlo y volverlo a convertir en un objeto usable:
const configGuardada = JSON.parse(localStorage.getItem('config'));
console.log("⚙️ Configuración recuperada como objeto:", configGuardada.idioma);


/**
 * 💡 PUNTOS CLAVE PARA RECORDAR:
 * 1. Capacidad: Aproximadamente 5MB (varía según el navegador).
 * 2. Seguridad: No guardes contraseñas o datos sensibles aquí; es accesible por JS.
 * 3. Persistencia: Los datos se quedan ahí hasta que tú o el usuario los borren.
 */

console.log("🚀 ¡Ya dominas lo básico de LocalStorage!");