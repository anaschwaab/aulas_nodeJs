const express = require("express");
const fs = require("fs");
const CPF = require("cpf");
const usuarios = require("./usuarios");

// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

// Define um roteamento
// Manipulador de rota
app.get("/", (requisicao, resposta) => {
    resposta.send("Hello, World! Do you like potatoes?");
});

// req = requisição do cliente
// res = resposta do servidor
app.get("/teste", (req, res) => { 
    // manipulador de rota
    // req = objeto com dados do cliente/solicitante
    res.send("<p>O que deseja, amigo?</p>");
});

app.get("/inicio", (req, res) => {
    const arquivo = fs.readFileSync("./inicio.html");
    res.send(arquivo.toString());
});

app.get("/ajuda", (req, res) => {
    const arquivo = fs.readFileSync("./ajuda.html");
    res.send(arquivo.toString());
});

// Parâmetro de caminho/rota
app.get("/funcionarios/:cpf", (req, res) => {
    // req.params = guarda todos os parametros de rota
    // const cpf = req.params.cpf;
    const { cpf } = req.params
    if(CPF.isValid(cpf)){
        // por padrão status é 200, nem precisaria passar nesse caso.
        res.status(200).send("O cpf é válido!")
    }else{
        res.sendStatus(400);
    };
});

app.get("/pessoas/:nome/:empresa", (req, res) => {
    // const nome = req.params.nome;
    // const empresa = req.params.empresa;
    const { nome, empresa } = req.params;
    res.send(`${nome} trabalha na ${empresa}`)
});

app.get("/imc/:peso/:altura", (req, res) => {
    const peso = parseFloat(req.params.peso);
    const altura = parseFloat(req.params.altura);
    const imc = peso / (altura * altura);
    res.send(`Seu IMC é: ${imc.toFixed(2)}`);
});

app.get("/cpfs/:numero", (req, res) => {
    const numero = parseFloat(req.params.numero);
    const cpfs = []
    for (let i = 0; i < numero; i++) {
        cpfs.push(CPF.generate());
    };
    const conteudo = cpfs.map((cpf, index) => `${index + 1}: ${cpf}`)
    const conteudoFormatado = conteudo.join("<br>");
    res.send(conteudoFormatado);
});

app.get("/youtube", (req, res) => {
    const { canal } = req.query;
    res.send(req.query);
});

app.get("/cadastro", (req, res) => {
    const { nome } = req.query;
    if(nome){
        res.send(`Seja bem-vindo, ${nome}`);
    }else{
        res.sendStatus(400);
    };
});

app.get("/soma", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if(num1 && num2){
        res.send(`A soma é : ${num1 + num2}`);
    }else{
        res.sendStatus(400);
    };
});


app.get("/boasvindas", (req, res) => {
    const { lang } = req.query;

    if(lang === "pt"){
        res.send("Bem-vindo!");
    }else if (lang === "en"){
        res.send("Welcome!");
    }else{
        res.status(400).send("Idioma não suportado!");
    };
});

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

//Homework, exercício II (precisamos colocar antes de :index)
app.get("/usuarios/novo", (req, res) => {
    const {nome, email} = req.query;
    const novoUsuario = {nome: nome, email: email};
    usuarios.push(novoUsuario);
    res.status(201).json({message: "Usuário adicionado!"});
});

app.get("/usuarios/:index", (req, res) => {
    const index = Number(req.params.index);
    const usuarioEncontrado = usuarios[index];

    // Tratar a ausência do usuário
    if(usuarioEncontrado){
        res.json(usuarioEncontrado);
    }else{
        res.status(404).json({message: "Usuário não encontrado"});
    };
    
});

//Homework, exercício I:
app.get("/usuarios/email/:email", (req, res) => {
    const { email } = req.params;
    const usuarioEncontrado = usuarios.find(el => el.email === email);

    if(usuarioEncontrado){
        res.json(usuarioEncontrado);
    }else{
        res.status(404).json({message: "Usuário não encontrado"})
    };
});

// Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    // roda sempre que o servidor inicia com sucesso
    console.log("Servidor rodando em http://localhost:3000/");
});

/** EXERCÍCIOS:
 * Exercício I: Crie dois arquivos html: inicio.html e ajuda.html. 
 * Defina uma rota GET /inicio que lê o arquivo inicio.html e responde com seu conteúdo.
 * Defina outra rota /ajuda que lê o arquivo ajuda.html e responde com seu conteúdo. 
 * Dentro do arquivo inicio.html, deve haver um link para a página de ajuda.
 * TEMPO = 15 min.
 * 
 * Para os próximos exercícios instale a dependência cpf: npm install cpf.
 * Exercício II: Crie uma calculadora IMC (uma rota /imc), receba via parâmetros de rotas, um peso e uma altura (converter p/ number).
 * E responde com o resultado do cálculo.
 * 
 * Exercício III: Na rota /funcionarios/:cpf, valide o cpf passado pelo cliente.
 * Se for válido responda positivamente (200), caso contrário responda negativamente (400).
 * 
 * Exercício IV: Crie uma rota /cpfs/:numero. E responde com a quantidade de cps aleatórios solicitada.
 * 
 * Exercício V: Crie uma rota que receba um parâmetro query `nome` e retorne uma mensagem de boas-vindas personalizada. Se `nome` não for fornecido, exiba uma mensagem de erro
 * 
 * Exercício VI: Crie uma rota que receba dois parâmetros query, `num1` e `num2`. Retorne como resposta a soma dos números (se os dois numeros não forem fornecidos mostrar uma
 * mensagem de erro).
 * 
 * Exercício VII: Crie uma rota que receba um parâmetro query, `lang` e exiba uma mensagem de boas vindas no idioma (português ou inglês). Caso a linguagem não seja fornecida ou
 * suportada exiba uma mensagem de erro.
 */
