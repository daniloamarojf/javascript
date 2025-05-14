// Aguarda o carregamento completo do conteúdo HTML antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // Obtém as referências dos botões
    const btn1 = document.getElementById('btnAdicao');
    const btn2 = document.getElementById('btnSubtracao');
    const btn3 = document.getElementById('btnMultiplicacao');
    const btn4 = document.getElementById('btnDivisao');

    // Obtém a referência ao elemento onde será exibido o resultado
    const resultadoElemento = document.getElementById('resultado');

    // Obtém os inputs dos números
    const input1 = document.getElementById('numero1');
    const input2 = document.getElementById('numero2');

    // Evento de clique no botão de Adição
    btn1.addEventListener('click', function () {
        const numero1 = parseFloat(input1.value); // Converte o valor do input1 para número
        const numero2 = parseFloat(input2.value); // Converte o valor do input2 para número
        const resultado = numero1 + numero2;      // Realiza a adição
        resultadoElemento.textContent = `O resultado da adição é: ${resultado}`;
    });

    // Evento de clique no botão de Subtração
    btn2.addEventListener('click', function () {
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);
        const resultado = numero1 - numero2;      // Realiza a subtração
        resultadoElemento.textContent = `O resultado da subtração é: ${resultado}`;
    });

    // Evento de clique no botão de Multiplicação
    btn3.addEventListener('click', function () {
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);
        const resultado = numero1 * numero2;      // Realiza a multiplicação
        resultadoElemento.textContent = `O resultado da multiplicação é: ${resultado}`;
    });

    // Evento de clique no botão de Divisão
    btn4.addEventListener('click', function () {
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);

        if (numero2 === 0) {
            // Evita divisão por zero
            resultadoElemento.textContent = 'Erro: divisão por zero não é permitida.';
        } else {
            const resultado = numero1 / numero2;  // Realiza a divisão
            resultadoElemento.textContent = `O resultado da divisão é: ${resultado}`;
        }
    });

});
