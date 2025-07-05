import { ValidarEntrada } from '../utilitarios/utilitarios.js';

export function CalcularParImpar() {

    //const numero = ValidarEntrada();
    const numero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    if (numero % 2 === 0) {
        resultado.innerHTML = "Número é PAR"
    } else {
        resultado.innerHTML = "Número ÍMPAR"
    }
};
