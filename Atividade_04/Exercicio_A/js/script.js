document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('numero');

    

    function ParImpar() {

        resultado.innerHTML = "";

        const numero = parseInt(input.value);


        if (isNaN(numero)) {
            resultado.innerHTML = "Digite um número inteiro";
        } else if (numero % 2 === 0) {
            resultado.innerHTML = "Número é PAR" 
        } else {
            resultado.innerHTML = "Número é ÍMPAR"
        };

    };

    botao.addEventListener('click', ParImpar);

    
});
