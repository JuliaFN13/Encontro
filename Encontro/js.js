// Função para gerar números aleatórios dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para limitar um valor dentro de um intervalo
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Selecionar o botão "SIM" e adicionar evento de clique
document.getElementById('botao-sim').addEventListener('click', function() {
    alert('Parabéns, você fez a eacolha certa! Vamos combinar de dar uns beijinhos s2 <3');
});

// Selecionar o botão "NÃO" e adicionar evento de passar o mouse por cima
document.getElementById('botao-nao').addEventListener('mouseover', function(event) {
    var x = event.target; // Captura o elemento que disparou o evento (no caso, o botão "NÃO")

    // Gerar margens aleatórias dentro de um intervalo
    var marginX = getRandomNumber(-100, 100);
    var marginY = getRandomNumber(-100, 100);

    // Limitar a posição dentro dos limites da tela
    var boundingRect = x.getBoundingClientRect(); // Obtém as dimensões do elemento
    var maxX = window.innerWidth - boundingRect.width - 20; // Largura máxima considerando margens
    var maxY = window.innerHeight - boundingRect.height - 20; // Altura máxima considerando margens

    var newLeft = clamp(boundingRect.left + marginX, 0, maxX);
    var newTop = clamp(boundingRect.top + marginY, 0, maxY);

    // Aplicar estilos para mudar a posição do botão "NÃO"
    x.style.position = 'absolute';
    x.style.left = newLeft + 'px';
    x.style.top = newTop + 'px';
});
