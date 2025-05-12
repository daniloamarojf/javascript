// Aguardar o carregamento completo do contéudo HTML antes de execultar o código
document.addEventListener('DOMContentLoaded', function() {

    const btn1 = document.getElementById('btnAdicao');
    const btn2 = document.getElementById('btnSubtracao');
    const btn3 = document.getElementById('btnMultiplicacao');
    const btn4 = document.getElementById('btnDivisao');
    const resultado = document.getElementById('resultado')



    const input1 = document.getElementById('numero1');
    const input2 = document.getElementById('numero2');
    const resultadoElemento = document.getElementById('resultado')

    
    btn1.addEventListener('click', function() {

        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);

        const resultado = numero1 + numero2;

        resultadoElemento.textContent = `O resultado da adição é:  ${resultado}`
        

    })

    btn2.addEventListener('click', function (){
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);

        const resultado = numero1 - numero2;

        resultadoElemento.textContent = `O resultado da subtração é: ${resultado}`
    })

    btn3.addEventListener('click', function (){
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);

        const resultado = numero1 * numero2;

        resultadoElemento.textContent = `O resultado da multiplicação é: ${resultado}`
    })

    btn4.addEventListener('click', function (){
        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);

        const resultado = numero1 / numero2;

        resultadoElemento.textContent = `O resultado da divisão é: ${resultado}`
    })



});


