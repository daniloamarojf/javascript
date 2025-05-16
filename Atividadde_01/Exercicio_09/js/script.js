document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnTema');
  const resultado = document.getElementById('resultado');

  btn.addEventListener('click', function () {
    document.body.classList.toggle('escuro');

    const temaAtual = document.body.classList.contains('escuro') ? 'Escuro' : 'Claro';
    resultado.textContent = `Tema atual: ${temaAtual}`;
  });
});
