document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.trim() === '') {
        firstNameError.textContent = 'El nombre es obligatorio.';
        valid = false;
    } else {
        firstNameError.textContent = '';
    }

    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.trim() === '') {
        lastNameError.textContent = 'El apellido es obligatorio.';
        valid = false;
    } else {
        lastNameError.textContent = '';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'El formato del correo electrónico no es válido.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    const message = document.getElementById('message').value;
    const messageError = document.getElementById('messageError');
    if (message.trim() === '') {
        messageError.textContent = 'El mensaje es obligatorio.';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    if (valid) {
        alert('Formulario enviado con éxito!');
    }
});


