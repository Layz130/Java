console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'none';
novoElemento.style.color = 'white';

// Inteligência Artificial

// main.js

// Função para criar e exibir a mensagem na tela com emoji
function exibirMensagem() {
    // Cria um elemento <div> para a mensagem
    const mensagemDiv = document.createElement('div');
    mensagemDiv.textContent = 'Olá, bem-vindo ao meu site! 😊';

    // Estiliza a mensagem
    mensagemDiv.style.fontSize = '24px';
    mensagemDiv.style.color = 'white';
    mensagemDiv.style.textAlign = 'center';
    mensagemDiv.style.marginTop = '50px';

    // Adiciona o elemento à body do documento
    document.body.appendChild(mensagemDiv);

    // Cria um botão
    const botao = document.createElement('button');
    botao.textContent = 'Clique aqui!';
    botao.style.display = 'block';
    botao.style.margin = '20px auto';
    botao.style.padding = '10px 20px';
    botao.style.fontSize = '16px';
    botao.style.cursor = 'pointer';
    botao.style.backgroundColor = 'green'; // Cor de fundo do botão
    botao.style.color = 'white'; // Cor do texto
    botao.style.border = 'none';
    botao.style.borderRadius = '5px';
    botao.style.cursor = 'pointer';


    // Função para exibir mensagem adicional ao clicar no botão
    botao.onclick = function() {
        const mensagemAdicional = document.createElement('div');
        mensagemAdicional.textContent = 'Obrigado por clicar! 🎉';
        mensagemAdicional.style.fontSize = '20px';
        mensagemAdicional.style.color = 'pink';
        mensagemAdicional.style.textAlign = 'center';
        mensagemAdicional.style.marginTop = '20px';
        document.body.appendChild(mensagemAdicional);
    };

    // Adiciona o botão à body do documento
    document.body.appendChild(botao);
}

// Chama a função para exibir a mensagem quando a página carregar
window.onload = exibirMensagem;

// main.js

// Função para gerar uma cor aleatória em formato hexadecimal
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para mudar a cor de fundo da página
function mudarFundo() {
    document.body.style.backgroundColor = gerarCorAleatoria();
}

// Muda a cor de fundo a cada 1 segundo
setInterval(mudarFundo, 1000);

// main.js

// Função para gerar uma posição aleatória na tela
function gerarPosicaoAleatoria() {
    const x = Math.random() * (window.innerWidth - 50); // -50 para garantir que o emoji fique visível
    const y = Math.random() * (window.innerHeight - 50); // -50 para garantir que o emoji fique visível
    return { x, y };
}

// Função para criar um emoji
function criarEmoji(emojiTexto) {
    const emoji = document.createElement('div');
    emoji.textContent = emojiTexto; // Emoji que aparecerá
    emoji.style.position = 'absolute';
    emoji.style.fontSize = '50px';
    emoji.style.cursor = 'pointer';

    // Adiciona o evento de clique ao emoji
    emoji.onclick = function() {
        const { x, y } = gerarPosicaoAleatoria();
        emoji.style.left = `${x}px`;
        emoji.style.top = `${y}px`;
    };

    // Define uma posição inicial aleatória
    const { x, y } = gerarPosicaoAleatoria();
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    
    document.body.appendChild(emoji);
}

// Cria os emojis ao carregar o script
function inicializarEmojis() {
    const emojis = ['😊', '😂', '🥳', '😍', '🤖', '🐶', '🍕', '🎉']; // Emojis diferentes
    emojis.forEach(criarEmoji);
}

// Inicia os emojis
inicializarEmojis();
