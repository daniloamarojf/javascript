document.addEventListener('DOMContentLoaded', function() {

    const btn1 = document.getElementById('btnVermelho');
    const btn2 = document.getElementById('btnVerde');
    const btn3 = document.getElementById('btnAzul');

    const resultadoElemento = document.getElementById('resultado');

    btn1.addEventListener('click', function () {
        resultadoElemento.style.background = 'red';

    });

    btn2.addEventListener('click', function () {
        resultadoElemento.style.background = 'green';

    });

    btn3.addEventListener('click', function () {
        resultadoElemento.style.background = 'blue';

    });
});
