
// Criando Arrays

const produtos = [
    { nome: 'Sabonete Natural', valor: 15.00, categoria: 'cosmeticos' },
    { nome: 'Sampoo Orgânico', valor: 25.00, categoria: 'cosmeticos'},
    { nome: 'Granola Artesanal', valor: 18.50, categoria: 'alimentos' },
    { nome: 'Mel Puro', valor: 22.00, categoria: 'alimentos'},
];

/* Estou usando o DOM para acessar os docuemntos do html e criando constantes 
* para a seleção dos filtros, para o resultado e para o total de produtos 
*/
document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('filtro');
    const resultado = document.getElementById('resultado');
    const totalProdutos = document.getElementById('totalProdutos');

    
    // Criando uma função para exibir os resultados
    function ExibirResultados(ProdutosFiltrados) {
        resultado.innerHTML = ""; // para limpar o resultado
        let total = 0; /*Variavel para receber total dos produtos */

        /* Usando o forEach para percorrer o array e selecionar nome e valor do produto */
        ProdutosFiltrados.forEach(function(produtos) {

            /* Usando i innerHTML para mostrar o resultado, (+) para mostrar todos os produtos
            * ou seja acumular os resultados e (toFixed(2)) para formatar para duas casas decimais */ 
            resultado.innerHTML += `${produtos.nome} R$ ${produtos.valor.toFixed(2)}`

            /* Na variável total estou armazenando a soma dos totais de cada produto*/
            total = total + produtos.valor;
        });

        // Usando o innerHTML para mostar o total dos produtos 
        totalProdutos.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }

    // Criando um evento que irá acontecer quando a seleção do filtro mudar
    select.addEventListener('change', function(){
        const filtro = select.value; // Atribuindo o valor escolhido na seleção ao filtro
        let produtosFiltrados = []; // Criei está variável para receber um array dos produtos selecionados

        // Se o resultado do filtro for igual a todos 
        if (filtro === "todos") {
            produtosFiltrados = produtos; // Armazenando todos os produtos na minha variavel produtosFiltrados
        } else {
            // Na variácel produtosFiltrados usei o filter para filtrar os produtos de acordo com a seleçao
            produtosFiltrados = produtos.filter(function(produtos){
            return produtos.categoria === filtro; // Retornando do array produtos de acordo com o filtro
            });
        }

        // Exibindo os produtos que foram filtrados
        ExibirResultados(produtosFiltrados);
    });
    
});
