import { ValidarEntrada } from '../utilitarios/utilitarios.js';

export function CalcularParImpar() {

    const numero = ValidarEntrada('numero', 'resultado');
    const resultado = document.getElementById('resultado');


    // Mesmo com a validação foi necessário confirmar se o
    // número é null, pois a validação so valida e retorna 
    // o valor null.
    if (numero === null) {
        return;
    }

    if (numero % 2 === 0) {
        resultado.innerHTML = "Número é PAR"
    } else {
        resultado.innerHTML = "Número ÍMPAR"
    }
}

export function CalcularMaiorMenor() {

    const numero1 = ValidarEntrada('numero1', 'resultado');
    const numero2 = ValidarEntrada('numero2', 'resultado');
    const numero3 = ValidarEntrada('numero3', 'resultado');
    const resultado = document.getElementById('resultado');

    
    if (numero1 === null || numero2 === null || numero3 === null) {
        return;
    }

    if (numero1 === numero2 && numero2 === numero3) {
        resultado.innerHTML = "Os números são iguais";
    } else {
        const maior = Math.max(numero1, numero2, numero3);
        const menor = Math.min(numero1, numero2, numero3);

        resultado.innerHTML = `O MAIOR número é: ${maior}  |  O MENOR número é ${menor}`
    }
}

