document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input1 = document.getElementById('numero1');
    const input2 = document.getElementById('numero2');
    const input3 = document.getElementById('numero3');

    function MaiorMenor() {

        const numero1 = parseFloat(input1.value);
        const numero2 = parseFloat(input2.value);
        const numero3 = parseFloat(input3.value);

        if (numero1 === numero2 && numero2 === numero3) {
            resultado.innerHTML = "Os números são iguais";
        } else {
            const maior = Math.max(numero1, numero2, numero3);
            const menor = Math.min(numero1, numero2, numero3);

            resultado.innerHTML = `O MAIOR número é: ${maior}  |  O MENOR número é ${menor}`
        }
    }

    botao.addEventListener('click', MaiorMenor)
});
