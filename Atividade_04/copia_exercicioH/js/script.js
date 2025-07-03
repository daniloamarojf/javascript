
/**Utilizando o DOM para acessar o html e pegar os objetos */
document.addEventListener('DOMContentLoaded', () => {
    //Criando constantes de acordo com os objetos do html
    const input1 = document.getElementById('numero1');
    const input2 = document.getElementById('numero2');
    const input3 = document.getElementById('numero3');
    const btn = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    // No objeto bnt estou criando um evento de click
    btn.addEventListener('click', function () {
        // Criando constantes para receber os INTEIROS do input
        const elemento1 = parseInt(input1.value); // <== A constante Elemento1 est´recebendo o valor do input
        const elemento2 = parseInt(input2.value);
        const elemento3 = parseInt(input3.value);
        
        // Calcular o delta
        const delta = (elemento2 ** 2) - (4 * elemento1 * elemento3)

        // calculando a raiz quandrada do delta
        const raizDelta = Math.sqrt(delta);

        // Calculando as raizes utilizando a formula de baskara
        const raiz1 = (-elemento2 + raizDelta) / (2 * elemento1);
        const raiz2 = (-elemento2 - raizDelta) / (2 * elemento1);

        resultado.innerHTML= `
            Valor resolve a seguinte expressão <span>${elemento1}𝑥²+${elemento2}x+${elemento3}</span>
             - Calculando o delta: <span>${delta}</span>
             - Calculando as raízes:
                Raíz 1 = <span>${raiz1}</span>
                Raíz 2 = <span>${raiz2}</span>`;
        
    })
})
