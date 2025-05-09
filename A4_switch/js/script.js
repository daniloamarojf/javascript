// Aguarda o carregamento completo do HTML antes de rodar o scrit
document.addEventListener('DOMContentLoaded', function() {

    // Obtém o botão com id "btnMostrarDia"
    const botao = document.getElementById('btnMostrarDia');

    // Obtém o campo de entrada com id "númeroDia" (onde o usuário digita o numero)
    const entrada = document.getElementById('numeroDia');

    // Obtém o elemento com id "respostaDia", onde será exibido o nom do dia
    const saida = document.getElementById('respostaDia');

    // Adiciona um evento ao botão para execultar uma função quando ele for clicado
    botao.addEventListener('click', function() {

        // Converte o valor digitado pelo usuário (string) em número inteiro
        const numero = parseInt(entrada.value);

        // Verifica o valor da variável "numero" e exibe o dia correspondente
        switch (numero){
            case 1:
                saida.textContent = 'Domingo';
                break;
            case 2:
                saida.textContent = 'Segunda-feira';
                break;
            case 3:
                saida.textContent = 'Terça-feira';
                break;
            case 4:
                saida.textContent = 'Quarta-feira';
                break;
            case 5:
                saida.textContent = 'Quinta-feira';
                break;
            case 6:
                saida.textContent = 'Sexta-feira';
                break;
            case 7:
                saida.textContent = 'Sábado';
                break;
            default:
                saida.textContent - 'Número inválido!'
                break;
        }       
    })
})
