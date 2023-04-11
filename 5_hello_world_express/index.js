const express = require("express");

// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();


// Define um roteamento
app.get("/", (requisicao, resposta) => {
    resposta.send("Hello, World!");
});

// Inicializa a escuta de requisições do servidor
app.listen(3000);