document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('texto');
    const contador = document.getElementById('contador');

    input.addEventListener('input', function () {
        const texto = input.value;
        contador.textContent = texto.length;
    });
});
