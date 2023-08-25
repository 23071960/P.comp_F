// lista.js

// Função para exibir a coleção de dados na lista
function exibirColecao() {
    var listaDados = document.getElementById("listaDados");

    // Recuperar a coleção de dados do sessionStorage
    var dadosAnteriores = sessionStorage.getItem("dadosFormulario");
    var colecaoDados = JSON.parse(dadosAnteriores);

    // Preencher a lista com os dados
    if (colecaoDados) {
        colecaoDados.forEach(function(dados) {
            var listItem = document.createElement("li");
            listItem.textContent = "Nome: " + dados.nome + ", E-mail: " + dados.email;
            listaDados.appendChild(listItem);
        });
    }
}

// Chamar a função para exibir a coleção quando a página é carregada
window.onload = exibirColecao;
