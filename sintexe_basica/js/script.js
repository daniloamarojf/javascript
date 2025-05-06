// === Exemplo com var ===
var x = 10;
var x = 20; // Redeclaração permitida
console.log(x); // Resultado 20

// === exemlo com let ===
let y = 30;
// let y = 40; // Erro: redeclaração não permitida
y = 40;        // Reatribuição permitida
console.log(y); // Resultaado: 40

// === Exemplo com cosnt ===
const z = 50;
// z = 60; // Erro: Reatrinuição não permitida
console.log(z); // Resultado: 50

// Escopo de bloco (diferença entre ver e let/const)
{
    var a = 1; // Vaza para fora do bloco
    let b = 2; // Restrita ao bloco
    const c = 3; // Restrita ao bloco
}
console.log(a); // 1
// console.log(b); // Erro: b não definido
// console.log(c); // Erro: c não definido