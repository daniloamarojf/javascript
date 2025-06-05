

const produtos = [
    { nome: 'Sabonete Natural', valor: 15.00, categoria: 'cosmeticos' },
    { nome: 'Sampoo Orgânico', valor: 25.00, categoria: 'consmeticos'},
    { nome: 'Granola Artesanal', valor: 18.50, categoria: 'alimentos' },
    { nome: 'Mel Puro', valor: 22.00, categoria: 'aliemntos'},
];

document.addEventListener('DOMContentLoaded', function() {
    const btnTodos = document.getElementById('resultado');
    const btnCosmeticos = document.getElementById('resultado');
    const btnAlimentos = document.getElementById('resultado');

    const todosProdutos = document.getElementById('produtos');
    const totalProdutos = document.getElementById('total');

    btnAlimentos.addEventListener('click', function() {
        const produto = categoria.filter(function(alimentos) {
            return categoria.alimentos;

        const totalProdutos = total.reduce(function(acumulador, valor) {
            return acumulador + valor
        }), 0 ;
    });

    document.getElementById('resultado').innerHTML = `
        ${JSON.stringify(nome, valor)}`
    });

    document.getElementById('total'),innerHTML = `
        Total: ${totalProdutos}`

} );

document.addEventListener