function login() {
    // Usuario quemado
    localStorage.setItem("juanfer1","123")

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const error_msg = document.getElementById('login-error');
    if (username.length < 8 || username.length > 15) {
        error_msg.textContent =  'El nombre de usuario debe tener entre 8 y 15 caracteres.';
        return; 
    }  else if (/\s/.test(username)) {
        error_msg.textContent = 'El nombre de usuario no puede contener espacios.';
        return;
    } else if (!/^[A-Za-z]/.test(username)) {
        error_msg.textContent = 'El nombre de usuario debe comenzar con una letra.';
        return;
    } else {
        error_msg.textContent =  ' ';
    }

    if (password == localStorage.getItem(username)){
        window.location.href = 'home.html'
    } else {
        error_msg.textContent =  'Credenciales Inválidas';
    }

}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirm_password = document.getElementById('register-confirm-password').value;
    const error_msg = document.getElementById('register-error');

    if (username.length < 8 || username.length > 15) {
        error_msg.textContent =  'El nombre de usuario debe tener entre 8 y 15 caracteres.';
        return; 
    }  else if (/\s/.test(username)) {
        error_msg.textContent = 'El nombre de usuario no puede contener espacios.';
        return;
    } else if (!/^[A-Za-z]/.test(username)) {
        error_msg.textContent = 'El nombre de usuario debe comenzar con una letra.';
        return;
    } else if (localStorage.getItem(username) != null) {
        error_msg.textContent = 'El nombre de usuario ingresado ya está en uso.';
        return;
    }

    
    if (password.length < 12 || password.length > 20) {
        error_msg.textContent = 'La contraseña debe tener entre 12 y 20 caracteres.';
        return;
    } else if (!/[A-Z]/.test(password)) {
        error_msg.textContent = 'La contraseña debe incluir al menos una letra en mayúsculas.';
        return;
    } else if (!/[a-z]/.test(password)) {
        error_msg.textContent = 'La contraseña debe incluir al menos una letra en minúsculas.';
        return;
    } else if (!/\d/.test(password)) {
        error_msg.textContent = 'La contraseña debe incluir al menos un número.';
        return;
    } else if (!/[-!@#$%^&*(),.?":{}|<>]/.test(password)) {
        error_msg.textContent = 'La contraseña debe incluir al menos un carácter especial.';
        return;
    }
    
    if (password !== confirm_password) {
        error_msg.textContent = 'Las contraseñas no coinciden.';
        return;
    } else {
        error_msg.textContent = ' ';
        localStorage.setItem(username,password);
        window.location.href = 'home.html'
    }
}
