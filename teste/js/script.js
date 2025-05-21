document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('bntVerificar');
    const input = document.getElementById('palavra');
    const resultado = document.getElementById('resultado');

    btn.addEventListener('click', function(){
        const palavra = input.value;

        if (palavra !== '') {
            const inverter = palavra.split('').reverse().join('');
            if (palavra === inverter) {
                const resultado = textContent('Polindromo');
            } else {
                const resultado = textContent('Não polindromo');
            }
        } else {
            const resultado = textContent('digite uma palavra')
        }
    });
});
