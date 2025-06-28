document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');
    const explicacao = document.getElementById('explicacao');
    const input1 = document.getElementById('medida1');
    const input2 = document.getElementById('medida2');
    const input3 = document.getElementById('medida3');

    function VerificarTringulo () {

        const medida1 = parseInt(input1.value);
        const medida2 = parseInt(input2.value);
        const medida3 = parseInt(input3.value);

        if (isNaN(medida1) || isNaN(medida2) || isNaN(medida3)) {
            resultado.innerHTML = "Por favor, insira três números válidos.";
            explicacao.innerHTML = "";
            return;
        }

        if (medida1 + medida2 > medida3 &&
            medida1 + medida3 > medida2 && 
            medida2 + medida3 > medida1) {
            resultado.innerHTML = `As medidas ${medida1}, ${medida2} e ${medida3} forma um trinagulo.`;
            explicacao.innerHTML = "Pois a soma de dois segmentos é maior que o terceiro."
           } else {
            resultado.innerHTML = `As medidas ${medida1}, ${medida2} e ${medida3} NÃO forma um trinagulo.`;
            explicacao.innerHTML = "Pois a soma de dois segmentos NÃO é maior que o terceiro."
           }
    }

    botao.addEventListener('click', VerificarTringulo)
})
