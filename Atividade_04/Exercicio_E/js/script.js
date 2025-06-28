/*Crie uma página onde o usuário informa a distância da viagem em quilômetros,
 e o site calcula o preço total, conforme a regra:
Viagens de até 200 km custam R$0,70 por km.
Viagens acima de 200 km custam R$0,40 por km.
O valor final deve ser exibido de forma clara, simulando o funcionamento de um sistema real de vendas de passagens.
*/

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('distancia');

    function CalcularPreco () {

        const distancia = parseFloat(input.value);
        let preco;

        if (isNaN(distancia) || distancia <= 0) {
            resultado.innerHTML = "Por favor, insira uma distância válida (número maior que zero).";
            return;
        }

        if (distancia <= 200) {
            preco = distancia * 0.70
            resultado.innerHTML = `O valor da passagem é: ${preco.toFixed(2)}.`
        } else {
            preco = distancia* 0.40
            resultado.innerHTML = `O valor da passagem é: ${preco.toFixed(2)}.`
        }
    }

    botao.addEventListener('click', CalcularPreco)
})

