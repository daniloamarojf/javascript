document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('ano');

    function CalcularBissexto () {

        const ano = parseInt(input.value);
        

        if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
            resultado.innerHTML = `( ${ano} ) <strong>É</strong> Ano Bissexto.`;
        } else {
            resultado.innerHTML = `( ${ano} ) <strong>NÃO</strong> é Ano Bissexto`
        }
    }

    botao.addEventListener('click', CalcularBissexto)
})
