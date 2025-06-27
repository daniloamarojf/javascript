
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('valor');


    function CalcularAumento () {

        const valor = parseFloat(input.value);
        let SalarioAumentado;

        
        if (valor < 1000) {
            SalarioAumentado = valor + (valor * 0.10)
            resultado.innerHTML = `O salário aumentará em 10%. Novo salário é: ${SalarioAumentado}.`
        } else if (valor > 1500 ) {
            SalarioAumentado = valor + (valor * 0.05)
            resultado.innerHTML = `O salário aumentará em 5%. Novo salário é: ${SalarioAumentado}`
        } else {
            resultado.innerHTML = `O salário não terá aumento. Salário é ${valor}`
        }
    }

    botao.addEventListener('click', CalcularAumento )
})
