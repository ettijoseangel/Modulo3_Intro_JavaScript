const input = document.getElementById('input');
const saveButton = document.getElementById('saveBtn');
const comment_box = document.getElementById('comment_box');

let comentarios = [];

saveButton.addEventListener('click', () => {
    const comment = input.value;

    //Esto borra el campo de texto cada vez que hay un nuevo comentario
    input.value = "";

    comentarios.push(comment);

    //Guardar los comentarios en localStorage
    const comentariosJSON = JSON.stringify(comentarios);
    localStorage.setItem('comentarios', comentariosJSON);
    render_comments(comentarios);


});

const render_comments = (comments) => {
    comment_box.innerText = " ";
    for (let i =0; i < comments.length; i++) {
        const commentElement = document.createElement('p');
        commentElement.textContent = comments[i];
        comment_box.appendChild(commentElement);
    }
}

//Al cargar la página, obtenemos los comentarios almacenados en localStorage y los renderizamos
const comentariosJSON = localStorage.getItem('comentarios');

comentarios = JSON.parse(comentariosJSON);
render_comments(comentarios); 