// script.js

function salvarDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var dados = {
        nome: nome,
        email: email
    };

    // Verificar se já existem dados salvos
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaDados = [];

    if (dadosAnteriores) {
        listaDados = JSON.parse(dadosAnteriores);
    }

    // Adicionar os novos dados à lista
    listaDados.push(dados);

    // Armazenar a lista atualizada no sessionStorage
    sessionStorage.setItem("dadosFormulario", JSON.stringify(listaDados));

    // Exibir mensagem de confirmação
    exibirPopup();

    // Limpar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    // Atualizar a lista na página
    exibirListaNaPagina();
}

function exibirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function exibirListaNaPagina() {
    var listaDados = document.getElementById("listaDados");

    // Limpar a lista
    listaDados.innerHTML = "";

    // Recuperar a lista de dados do sessionStorage
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var listaArmazenada = JSON.parse(dadosAnteriores);

    // Preencher a lista com os dados
    if (listaArmazenada) {
        listaArmazenada.forEach(function(dados) {
            var listItem = document.createElement("li");
            listItem.textContent = "Nome: " + dados.nome + ", E-mail: " + dados.email;
            listaDados.appendChild(listItem);
        });
    }
}
