document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btnVerificar');
    const resultado = document.getElementById('resultado');

    const input = document.getElementById('numero');

    btn.addEventListener('click', function() {

        const numero = parseFloat(input.value);

        if (numero > 0) {
            resultado.textContent = 'Número é positivo';
        } else if (numero < 0) {
            resultado.textContent = 'Número é negativo';
        } else {
            resultado.textContent = 'Número é 0 (zero)';
        }
        


    });
});
