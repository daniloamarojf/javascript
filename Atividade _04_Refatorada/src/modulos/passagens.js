import { ValidarEntrada } from "../utilitarios/utilitarios.js";


export function CalcularPrecoPassagem () {

    const distancia = ValidarEntrada('distancia', 'resultado');
    const resultado = document.getElementById('resultado');

    if ( distancia === null) {
        return;
    }
    
    let preco;

    if (distancia <= 200) {
        preco = distancia * 0.70
        resultado.innerHTML = `O valor da passagem é: R$ ${preco.toFixed(2)}.`
    } else {
        preco = distancia* 0.40
        resultado.innerHTML = `O valor da passagem é: R$ ${preco.toFixed(2)}.`
    }
}

