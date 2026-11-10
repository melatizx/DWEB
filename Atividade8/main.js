// Listas para guardar os dados de cada pessoa
var idades = [];
var sexos = [];
var opinioes = [];

var totalPessoas = 45;

function adicionar() {
    var idade = Number(document.getElementById("idade").value);
    var sexo = document.getElementById("sexo").value;
    var opiniao = Number(document.getElementById("opiniao").value);

    if (idade <= 0 || sexo == "" || opiniao == 0) {
        alert("Preencha todos os campos!");
        return;
    }

    if (idades.length >= totalPessoas) {
        alert("Já foram cadastradas as 45 pessoas!");
        return;
    }

    idades.push(idade);
    sexos.push(sexo);
    opinioes.push(opiniao);

    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";

    document.getElementById("contador").innerHTML =
        "Respostas: " + idades.length + " de " + totalPessoas;

    if (idades.length == totalPessoas) {
        mostrarResultados();
    }
}

function mostrarResultados() {
    if (idades.length == 0) {
        alert("Nenhuma resposta cadastrada ainda!");
        return;
    }

    var soma = 0;
    var maisVelha = idades[0];
    var maisNova = idades[0];
    var pessimo = 0;
    var otimoEBom = 0;
    var mulheres = 0;
    var homens = 0;
    var outros = 0;

    for (var i = 0; i < idades.length; i++) {
        soma = soma + idades[i];

        if (idades[i] > maisVelha) {
            maisVelha = idades[i];
        }

        if (idades[i] < maisNova) {
            maisNova = idades[i];
        }

        if (opinioes[i] == 1) {
            pessimo = pessimo + 1;
        }

        if (opinioes[i] == 4 || opinioes[i] == 3) {
            otimoEBom = otimoEBom + 1;
        }

        if (sexos[i] == "feminino") {
            mulheres = mulheres + 1;
        } else if (sexos[i] == "masculino") {
            homens = homens + 1;
        } else {
            outros = outros + 1;
        }
    }

    var media = soma / idades.length;
    var porcentagem = (otimoEBom / idades.length) * 100;

    document.getElementById("resultado").innerHTML =
        "<h2>Resultados</h2>" +
        "<p>Média das idades: " + media.toFixed(1) + " anos</p>" +
        "<p>Pessoa mais velha: " + maisVelha + " anos</p>" +
        "<p>Pessoa mais nova: " + maisNova + " anos</p>" +
        "<p>Responderam péssimo: " + pessimo + "</p>" +
        "<p>Porcentagem de ótimo e bom: " + porcentagem.toFixed(1) + "%</p>" +
        "<p>Mulheres: " + mulheres + "</p>" +
        "<p>Homens: " + homens + "</p>" +
        "<p>Outros: " + outros + "</p>";
}
