// script.js

function salvarDados() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    var dados = {
        nome: nome,
        email: email
    };

    // Usando o sessionStorage para armazenamento temporário
    sessionStorage.setItem("dadosFormulario", JSON.stringify(dados));

    // Exibir mensagem de confirmação
    exibirPopup();
}

function exibirPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    // Limpar o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}