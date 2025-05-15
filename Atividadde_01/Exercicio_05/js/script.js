document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('btnAdicionar');


    const input = document.getElementById('item');

    const lista = document.getElementById('lista')

    btn.addEventListener('click', function() {
        const item = (input.value);

        if (item !== "") {
            const novoItem = document.createElement('li');
            novoItem.textContent = item;
            
            lista.appendChild(novoItem);
            input.value = "";
        }
        
    });

   
});
