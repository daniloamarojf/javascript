document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('btnVerificar');

    const resultadoElemento = document.getElementById('resultado');

    const input = document.getElementById('numero');

    const sorteadoElement = document.getElementById('sorteado');

    const numeroSorteado = Math.floor(Math.random() * 10) + 1;


    btn.addEventListener('click', function() {

        const numero = parseInt(input.value);

        if (numero === numeroSorteado) {
            resultadoElemento.textContent = 'Acertou';

        } else if (numero < numeroSorteado) {
            resultadoElemento.textContent = 'O número sorteado é maior';
        } else {
            resultadoElemento.textContent = 'O número sorteado é menor';
        }


    })
})
