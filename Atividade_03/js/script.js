
/**
 * Criando Arrays
 */
 
const produtos = [
    { nome: 'Sabonete Natural', valor: 15.00, categoria: 'cosmeticos' },
    { nome: 'Sampoo Orgânico', valor: 25.00, categoria: 'cosmeticos'},
    { nome: 'Granola Artesanal', valor: 18.50, categoria: 'alimentos' },
    { nome: 'Mel Puro', valor: 22.00, categoria: 'alimentos'},
];

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('filtro');
    const resultado = document.getElementById('resultado');
    const totalProdutos = document.getElementById('totalProdutos');

    /*
     * Criando uma função para exibir os resultados
     */
    function ExibirResultados(ProdutosFiltrados) {
        resultado.innerHTML = "";
        let total = 0; /*Variavel para receber total dos produtos */

        /* Usando o forEach para percorrer o array e selecionar nome e valor do produto */
        ProdutosFiltrados.forEach(function(produtos) {
            resultado.innerHTML += `${produtos.nome} - R$ ${produtos.valor.toFixed(2)}`
            total = total + produtos.valor;
        });

        totalProdutos.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    
    select.addEventListener('change', function(){
        const filtro = select.value;
        let produtosFiltrados = [];

        if (filtro === "todos") {
            produtosFiltrados = produtos;
        } else {
            produtosFiltrados = produtos.filter(function(produtos){
            return produtos.categoria === filtro;
            });
        }

        ExibirResultados(produtosFiltrados);
    });
    
   ExibirResultados();

});
