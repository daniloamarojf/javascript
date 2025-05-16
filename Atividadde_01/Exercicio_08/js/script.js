document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('btnVerificar');
    const resultadoElemento = document.getElementById('resultado');
    const input = document.getElementById('dados');

    btn.addEventListener('click', function(){
        const dados = input.value;

        if (isInteger(dados)) {
            resultadoElemento.textContent = 'Inteiro';
        } else if (isDecimal(dados)) {
            resultadoElemento.textContent = 'Decimal';
        } else if (/^[a-zA-Z]+$/.test(dados)) {
            resultadoElemento.textContent = 'String';
        } else {
            resultadoElemento.textContent = 'Vários tipos'
        }
    });
});
