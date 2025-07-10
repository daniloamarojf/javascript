import { ValidarEntrada } from "../utilitarios/utilitarios.js";

export function CalcularBissexto () {

    const ano = ValidarEntrada('ano', 'resultado');
    const resultado = document.getElementById('resultado');

    if (ano === null) {
        return;
    }
        
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        resultado.innerHTML = `( ${ano} ) <strong>É</strong> Ano Bissexto.`;
    } else {
        resultado.innerHTML = `( ${ano} ) <strong>NÃO</strong> é Ano Bissexto`
    }
}

