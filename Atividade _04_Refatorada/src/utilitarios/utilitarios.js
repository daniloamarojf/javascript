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

// Criei uma função para adicionar um evento a um botão com dois parâmetro
// (parâmetro botão) e o (parâmetro Função a ser execultada)
export function AdicionarEventoBotao (idBotao, funcao) {
    
    // Criei um objeto com id Botão e logo após um evento de click 
    // chamando a função 
    document.getElementById(idBotao).addEventListener('click', funcao);
}



/*
export function validarNota (nota1Bim, nota2Bim, nota3Bim, nota4Bim) {
    
    // Campos vazios
    if (nota1Bim === '' || nota2Bim === '' || nota3Bim === '' || nota4Bim === '') {
        alert("Todos os campos devem ser preenchidos.")
        return null;
    }

    // Converter em número
    [nota1Bim, nota2Bim, nota3Bim, nota4Bim] = 
    [nota1Bim, nota2Bim, nota3Bim, nota4Bim].map(Number);

    // Números válidos
    if (isNaN(nota1Bim) || isNaN(nota2Bim) || isNaN(nota3Bim) || isNaN(nota4Bim)) {
        alert("Por favor, preencha o campo corretamente.")
        return null;
    }

    // Número negativo
    if (nota1Bim < 0 || nota2Bim < 0 || nota3Bim < 0 || nota4Bim < 0) {
        alert("Nota do aluno não pode ser negativa.")
        return null;
    }

    // Número maior que 25
    if (nota1Bim > 25 || nota2Bim > 25 || nota3Bim > 25 || nota4Bim > 25) {
        alert("Nota do aluno não pode ser maior que 25 pontos.")
        return null;

    }

    return {nota1Bim, nota2Bim, nota3Bim, nota4Bim};
}
    

export function validarNome(nome) {

    // Incluir validação de numero e caracteres especiais

    // Dividindo em partes, sem espaço no icicio e final
    const nomePartes = nome.trim().split(/\s+/);

    // Se há no mínino duas palavras
    // Cada com dus letras
    const nomeValido = nomePartes.length >=2 && nomePartes.every(parte => parte.length >= 2);
    
    // Mensagem se nome inválido
    if (!nomeValido) {
        alert('Digite o nome completo (nome e sobrenome).')
        return null;
    }
    return nome;
}
    */