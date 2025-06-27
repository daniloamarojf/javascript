/*Crie uma página onde o usuário informa a distância da viagem em quilômetros, e o site calcula o preço total, conforme a regra:
Viagens de até 200 km custam R$0,70 por km.
Viagens acima de 200 km custam R$0,40 por km.
O valor final deve ser exibido de forma clara, simulando o funcionamento de um sistema real de vendas de passagens.
*/

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('distancia');


    function CalcularPassagem () {

        const distancia   = parseFloat(input.value);
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

    botao.addEventListener('click', CalcularPassagem )
})

