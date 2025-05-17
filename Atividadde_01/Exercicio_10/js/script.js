document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('btnVerificar');

    const resultado = document.getElementById('resultado');

    const inputSenha = document.getElementById('senha');


    btn.addEventListener('click', function(){
        const senha = inputSenha.value;

        const senhaTamanho = senha.length >=8;
        const senhaNumero = /[0-9]/.test(senha);
        const senhaMaiuscula = /[A-Z]/.test(senha);
        const senhaMinuscula = /[a-z]/.test(senha);

        if (senhaTamanho && senhaNumero && senhaMaiuscula && senhaMinuscula) {
            resultado.textContent = 'Forte'
        } else {
            resultado.textContent = 'Fraca'
        }
    });

});
