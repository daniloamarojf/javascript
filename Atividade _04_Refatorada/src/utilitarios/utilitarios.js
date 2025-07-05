export function ValidarEntrada () {
    const numero = document.getElementById('numero');
    const resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, preencha o campo corretamente."
        return null;
    }


}

export function AdicionarEventoBotao (idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}