import { ValidarEntrada } from '../utilitarios/utilitarios.js';

export function CalcularParImpar() {

    const numero = ValidarEntrada('numero', 'resultado-par-impar');
    const resultado = document.getElementById('resultado-par-impar');


    // Mesmo com a validação foi necessário confirmar se o
    // número é null, pois a validação ´so valida e retorna 
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

