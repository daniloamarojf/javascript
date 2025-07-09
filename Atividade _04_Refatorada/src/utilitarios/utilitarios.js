// Aqui estou usando export para permitir 
// que a função seja usada em outros arquivos
export function ValidarEntrada (idInput, idResultado) {
    // Criei duas constantes uma para pegar o número 
    // que o usuario digitou, refere-se ao id=numero no html
    // A outra para ler o lugar onde a mensagem será 
    // exibida, refere-se ao id=resultado no html
    const input = document.getElementById(idInput);
    const resultado = document.getElementById(idResultado);
     
    // Eu estava primeiro convertendo o numero em Number
    // para depois verificar se está vazio, com isso 
    // a validação não funcionava (o Number transforma
    // o valor vazio em 0)
    const texto = input.value.trim();

    if (texto === '') {
        resultado.innerHTML = "Por favor, preencha o campo corretamente."
        return null;
    }

    // A constante abaixo pega o valor de input e converte em número
    const numeroInput = Number(texto);

    // isNan: Verifica se não é um numero valido e se é vazio
    if (isNaN(numeroInput)) {
        resultado.innerHTML = "Por favor, preencha o campo corretamente."
        return null;
    }

    return numeroInput; // Se passar pelos paramentros retorna o valor

}

export function AdicionarEventoBotao (idBotao, funcao) {
    
    document.getElementById(idBotao).addEventListener('click', funcao);
}