document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('btnTabuada');

    const resultado = document.getElementById('resultado');

    const input = document.getElementById('numero');

    const lista = document.getElementById('lista');

    btn.addEventListener('click', function(){

        const numero = parseInt(input.value);

        if (numero === 1) {
            for (i = 1; i <= 10;) {
                const tabuada = document.createElement('li');
                resultado.textContent = tabuada;

                lista.appendChild(resultado) 
            }
        }

        }
    })
});
