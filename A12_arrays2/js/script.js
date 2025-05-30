/**
 * ARQUIVO: metodos.js
 * DESCRIÇÃO: Demostração dos primcippis métodos de iteração de arrays em JavaScript
 * AUTOR: Danilo Rogerio Magalhães Amaro
 * DATA: 29/05/2025
 * VERSÃO:  1.0
 */

// ==================================================
// DADOS DE EXEMPLO
// ==================================================

// Array de números para exemplos básicos
const numeros = [1, 2, 3, 4, 5];

// Array de  objetos (pessoas) para exemplos mais complexos
const pessoas = [
    { nome: 'Gal Gadot', idade: 40, cidade: 'Rosh HaAyin' },
    { nome: 'Elizabeth Olsen', idade: 36, cidade: 'Sherman Oaks' },
    { nome: 'Alexandra Daddario', idade: 39, cidade: 'Nova York' },
    { nome: 'Anna de Armas', idade: 37, cidade: 'Havana' },
    { nome: 'Grace Kelly', idade: 95, cidade: 'Filadélfia' },
    { nome: 'Jaz Sinclair', idade: 17, cidade: 'Dallas' },
]; 

// ==================================================
// MÉTODOS DE ITERAÇÃO
// ==================================================

/**
 * MÉTODO: forEach() )paraCada)
 * DESCRIÃO: Executa uma função para cada elemento do array
 * NÃO RETORNA um novo array
 */
document.getElementById('botao-paraCada').addEventListener('click', function(){
    // Variável para acumular os resultados
    let resultado = '';

    // Usando forEach para iterar sobre cada número
    numeros.forEach(function(numero, indice){
        resultado += `Posição ${indice}: ${numero}\n`;
    });

    // Exibindo o resulrtado na página
    document.getElementById('resultado-paraCada').innerHTML = `
    <strong>Array original:</strong> ${JSON.stringify(numeros)}<br><br>
    <strong>Iteração com forEach:</strong><br>
    ${resultado}
    <small>Observação: forEach não retorna um novo array</small>
    `;
});
