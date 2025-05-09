// Aguarda o carregamento completo do conteúdo HTML antes de execultar o codigo
document.addEventListener('DOMContentLoaded', function() {

    // Obtém a referencia ao botão com id "btnVerificar"
    const btn = document.getElementById('btnVerificar');

    // Obtém  referencia ao campo de esntrada (input) com id "idade"
    const input = document.getElementById('idade');

    // Obtém a referência ao elemento onde o resultado será exibido (com id "resultado")
    const resultado = document.getElementById('resultado');

    // Adicionar um ouvinte de evento ao botão para reagir ao clique
    btn.addEventListener('click', function(){

        const idade = parseInt(input.value);

        if (idade < 18){
            // TextContent: permite ler ou alterar o texto contido dentro de um elemento
            resultado.textContent = 'Menor Idade!';

            // Verificar se a idade é exatamente 18
            } else if (idade === 18) {
                resultado.textContent = 'Tem exatamente 18 anos!';

            } else {
                resultado.textContent = 'Maior de idade!';
            }
    })
    
})
