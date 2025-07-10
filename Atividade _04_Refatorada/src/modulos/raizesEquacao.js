import { ValidarEntrada } from "../utilitarios/utilitarios.js";

export function CalcularEquacao() {

    const elementoA = ValidarEntrada('elementoA', 'resultado');
    const elementoB = ValidarEntrada('elementoB', 'resultado');
    const elementoC = ValidarEntrada('elementoC', 'resultado');
    const resultado = document.getElementById('resultado');


    if (elementoA === null || elementoB === null || elementoC === null) {
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    if (elementoA === 0) {
        resultado.innerHTML = "O valor do 'Elemento A' não pode ser zero, pois não é uma equação do 2º grau.";
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
    <p>2 - Utilizar a formula de baskara para calcular as raízes X1 e X2:</p>
    <p>    Raíz x1 = <span style="color: red;">${raizX1}</span></p>
    <p>    Raíz x2 = <span style="color: red;">${raizX2}</span></p>
    `;

}
       

