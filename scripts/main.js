let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/screenshot.jpg') {
      minhaImagem.setAttribute ('src','imagens/screenshot2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/screenshot.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
  localStorage.setItem('nome', meuNome);
  meuCabecalho.textContent = 'Bem-vindo a página do SP2 Brasil, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Bem-vindo a página do SP2 Brasil, ' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}