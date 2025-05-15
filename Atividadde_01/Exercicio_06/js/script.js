document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('btnVerificar');

    const input = document.getElementById('palavra');

    const resultadoElemento = document.getElementById('resultado');

    btn.addEventListener('click', function() {
        const palavra = input.value;

        if (palavra !== "") {
            const inverter = palavra.split('').reverse().join('');
            if (palavra === inverter) {
                resultadoElemento.textContent = 'É um Palíndrômo'
            } else {
                resultadoElemento.textContent = 'Não é Palindrômo'
            }
        }
    });
});

