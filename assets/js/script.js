const botao = document.getElementById('botao');
const body = document.body;

botao.addEventListener('click', () => {
  if (body.classList.contains('claro')) {
    body.classList.remove('claro');
    body.classList.add('escuro');
    botao.textContent = '🕷️'; // Ícone de caveira para Halloween
  } else {
    body.classList.remove('escuro');
    body.classList.add('claro');
    botao.textContent = '🎃'; // Ícone de abóbora para o modo claro
  }
});