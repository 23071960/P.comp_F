document.addEventListener("DOMContentLoaded", function() {
    var listaDados = document.getElementById("listaDados");

    // Recuperar os dados salvos na memória temporária
    var dadosString = sessionStorage.getItem("dadosFormulario");
    var dados = JSON.parse(dadosString);

    if (dados) {
        var listItem = document.createElement("li");
        listItem.textContent = "Nome: " + dados.nome + ", E-mail: " + dados.email;
        listaDados.appendChild(listItem);
    } else {
        var noDataItem = document.createElement("li");
        noDataItem.textContent = "Nenhum dado encontrado.";
        listaDados.appendChild(noDataItem);
    }
});
