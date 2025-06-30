document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input1 = document.getElementById('numero1');
    const input2 = document.getElementById('numero2');
    const input3 = document.getElementById('numero3');
  
    botao.addEventListener('click', () => {

        const elementoA = parseInt(input1.value);
        const elementoB = parseInt(input2.value);
        const elementoC = parseInt(input3.value);

        if (isNaN(elementoA) || isNaN(elementoB) || isNaN(elementoC)) {
            resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
            return;
        }

        if (elementoA === 0) {
            resultado.innerHTML = "O valor de 'a' não pode ser zero, pois não é uma equação do 2º grau.";
            return;
        }


        const delta = (elementoB ** 2) - 4 * elementoA * elementoC;

        if (delta < 0) {
            resultado.innerHTML = `Delta = ${delta}. A equação não possui raízes reais.`;
            return;
        }

        const raizDelta = Math.sqrt(delta);
        
        const raizX1 = (- elementoB + raizDelta) / (2 * elementoA);
        const raizX2 = (- elementoB - raizDelta) / (2 * elementoA);


        resultado.innerHTML = `
        <p> Vamos resolver a seguinte expressão <span style="color: red;">${elementoA}𝑥²+${elementoB}𝑥+${elementoC}</span></p>
        <p>1 - Calcular o delta: Δ=b2-4ac: Delta = <span style="color: red;">${delta}</span></p>
        <p>2 - Utilizar a formula de baskara para calcular X1 e X2:</p>
        <p>    Raíz x1 = <span style="color: red;">${raizX1}</span></p>
        <p>    Raíz x2 = <span style="color: red;">${raizX2}</span></p>
        `;

    })
}); 

