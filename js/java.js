// script.js

document.getElementById("createAccountForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Recoge los datos del formulario
    let formData = new FormData(this);
    let accountData = {};
    formData.forEach(function(value, key){
        accountData[key] = value;
    });

    // Envía los datos al backend (puede ser mediante AJAX, fetch, etc.)
    fetch('/create_account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(accountData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
    })
    .catch((error) => {
        console.error('Error:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
    });
});
