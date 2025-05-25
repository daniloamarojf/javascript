// ==============================================
// FUNÇÕES DE CÁLCULO (Arrow Function)
// ==============================================
const dobrar = numero => numero * 2;
const triplicar = numero => numero * 3;

// ==============================================
// FUNÇÃO DE EXIBIÇÃO DE RESULTADO
// ==============================================
function mostrarResultado(operacao, texto) {
    // Obtém referência aos elementos do DOM
    const input = document.getElementById('numero'); // Campo de entrada
    const resultado = document.getElementById('resultado'); // Elemento para exibir resultados

    // Converte o valor de string para número decimal
    const numero = parseInt(input.value);

    // Validação de entrada - verificca se não é um numero
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um nímero válido.';
        resultado.style = 'red'; // Feedback visual de erro
        return;
    }
     
    // Executa a operação matemática (dobrar ou triplicar)
    const valor = operacao(numero);

    // Formata e exibe o resultado
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black'; // Cor padrão para resultado cálido
}

// ===============================================
// EVENT LISTENERS - INTERAÇÕES DO USUÁRIO
// ===============================================

// bOTÃO "DOBRO" - Calcula e exibe o dobro do número
document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O dobro');
});

// bOTÃO "TRIPLO" - Calcula e exibe o triplo do número
document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(triplicar, 'O triplo');
});

// Campo númerico - Permite calcular com a tecla Enter
document.getElementById('numero').addEventListener('keypress', function(){
    // Verifica se a tecla pressionada foi Enter (código13)
    if (this.enterKeyHint.key === 'Enter') {
        // Por padrão, calcula o dobro quando Enter é pressionado
        mostrarResultado(dobrar, 'O dobro');
    }
});