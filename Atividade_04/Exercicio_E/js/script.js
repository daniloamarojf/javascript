
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
            resultado.innerHTML = `O valor da passagem é: R$ ${preco.toFixed(2)}.`
        } else {
            preco = distancia* 0.40
            resultado.innerHTML = `O valor da passagem é: R$ ${preco.toFixed(2)}.`
        }
    }

    botao.addEventListener('click', CalcularPreco)
})

