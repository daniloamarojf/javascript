import { ValidarEntrada } from "../utilitarios/utilitarios.js";

export function CalcularAumento () {

    const salario = ValidarEntrada('salario', 'resultado');
    const resultado = document.getElementById('resultado');

    if (salario === null) {
        return;
    }

    let salarioAumentado;

    if (salario < 1000) {
        salarioAumentado = salario + (salario * 0.10)
        resultado.innerHTML = `O salário aumentará em 10%. Novo salário é: ${salarioAumentado.toFixed(2)}.`
    } else if (salario > 1500 ) {
        salarioAumentado = salario + (salario * 0.05)
        resultado.innerHTML = `O salário aumentará em 5%. Novo salário é: ${salarioAumentado.toFixed(2)}`
    } else {
        resultado.innerHTML = `O salário não terá aumento. Salário é ${salario.toFixed(2)}`
    }
}


