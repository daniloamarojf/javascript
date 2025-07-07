import { ValidarEntrada } from '../utilitarios/utilitarios.js';


export function CalcularMaiorMenor() {

    const numero1 = ValidarEntrada('numero1', 'resultado-maior-menor');
    const numero2 = ValidarEntrada('numero2', 'resultado-maior-menor');
    const numero3 = ValidarEntrada('numero3', 'resultado-maior-menor');
    const resultado = document.getElementById('resultado-maior-menor');

    
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

