// Define uma função de saudação que recebe um nome como parâmetro
// Esta função retorna uma mensagem de boas-vindasas personalizada
const saudacao = function (nome) {
    return `Olá, ${nome}! Seja bem-vindo.`;
};

// Esta função exibe uma mensagem no elemento de rsultado da página
// Recebe mensagem como parâmetro e a insere no html
const mostrarResultado = (mensagem) => {
    //Obtém o elemento do DOM com id 'resultado'
    const resultadoElement = document.getElementById('resultado');
    // Define o conteúdo html do elemento com a mensagem formatada em um parâmetro
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

// Aguarda o evento de que todo o DOM foi carregado antes de execultar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém referência aos botôes do DOM pelos seus IDs
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');
    
    // Adicionar um listener de evento de clique no botão "saudar"
    saudarBtn.addEventListener('click', function() {
        // Chama a função de saudação com o nome "João" e armazena o resultado
        const mensagem = saudacao("João");
        // Chama a função para exibir o resultado na página
        mostrarResultado(mensagem);
    });

    // Adiciona um listener de evento de clique no botão "limpar"
    limparBtn.addEventListener('click', () => {
        // Limpa o conteúdo do elemento de resultado definindo seu HTML para vazio
        document.getElementById('resultado').innerHTML = '';
    });
});
