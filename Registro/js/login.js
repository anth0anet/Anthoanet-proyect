document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (usuario === 'docente' && password === '1234') {
        // Redirigir a la página principal si el login es correcto
        window.location.href = 'menu.html';
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        document.getElementById('error-message').style.display = 'block';
    }
});
