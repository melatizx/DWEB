var vitorias = 0;
var derrotas = 0;
var empates = 0;

function jogar(escolhaJogador) {
    var escolhaComputador = Math.floor(Math.random() * 3) + 1;

    var opcoes = ["", "Pedra", "Papel", "Tesoura"];

    document.getElementById("jogador").innerHTML = opcoes[escolhaJogador];
    document.getElementById("computador").innerHTML = opcoes[escolhaComputador];

    if (escolhaJogador == escolhaComputador) {
        document.getElementById("mensagem").innerHTML = "Empate!";
        empates++;
    }
    else if (
        (escolhaJogador == 1 && escolhaComputador == 3) ||
        (escolhaJogador == 2 && escolhaComputador == 1) ||
        (escolhaJogador == 3 && escolhaComputador == 2)
    ) {
        document.getElementById("mensagem").innerHTML = "Você venceu!";
        vitorias++;
    }
    else {
        document.getElementById("mensagem").innerHTML = "Você perdeu!";
        derrotas++;
    }

    document.getElementById("vitorias").innerHTML = vitorias;
    document.getElementById("derrotas").innerHTML = derrotas;
    document.getElementById("empates").innerHTML = empates;
}

function reiniciar() {
    vitorias = 0;
    derrotas = 0;
    empates = 0;

    document.getElementById("vitorias").innerHTML = 0;
    document.getElementById("derrotas").innerHTML = 0;
    document.getElementById("empates").innerHTML = 0;

    document.getElementById("jogador").innerHTML = "-";
    document.getElementById("computador").innerHTML = "-";
    document.getElementById("mensagem").innerHTML = "Faça sua escolha!";
}
