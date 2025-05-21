document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('btnTabuada');
    const input = document.getElementById('numero');
    const lista = document.getElementById('lista');

    btn.addEventListener('click', function () {
        const numero = parseInt(input.value);

        // Para limpar a lista anterior
        lista.innerHTML = '';

        if (!isNaN(numero)) {
            for (let i = 1; i <= 10; i++) {
                const item = document.createElement('li');
                item.textContent = `${numero} x ${i} = ${numero * i}`;
                lista.appendChild(item);
            }
        } else {
            alert('Por favor, digite um número válido.');
        }
    });
});
