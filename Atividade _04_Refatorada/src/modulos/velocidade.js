import { ValidarEntrada } from '../utilitarios/utilitarios.js';


export function CalcularVelocidade () {

    const velocidade = ValidarEntrada('velocidade', 'resultado');
    const resultado = document.getElementById('resultado');

    if (velocidade === null) {
        return;
    }

    if (velocidade <= 60) {
        resultado.innerHTML = "<strong>Parabéns!</strong> A velocidade está dentro do limite."
    } else {
            resultado.innerHTML = "<strong>Cuidado!</strong> Velocidade acima do limite."
    };
};


