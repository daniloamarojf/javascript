document.addEventListener('DOMContentLoaded', () => {
    const resultado = document.getElementById('resultado');
    const input = document.getElementById('velocidade');

    function VerificadorVelocidade () {

        resultado.innerHTML = "";

        const velocidade = parseFloat(input.value);

        if (isNaN(velocidade) || velocidade <= 0) {
            resultado.innerHTML = "Por favor, digite uma velocidade válida (maior que zero).";
            return;
        }


        if (velocidade <= 60) {
            resultado.innerHTML = "<strong>Parabéns!</strong> A velocidade está dentro do limite."
        } else {
            resultado.innerHTML = "<strong>Cuidado!</strong> Velocidade acima do limite."
        };
    };

    input.addEventListener('change', VerificadorVelocidade)
});
