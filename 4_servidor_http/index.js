const http = require("http");
const os = require("os");
const CPF = require("cpf");


const host = "localhost";
const porta = 3000;



const servidor = http.createServer((requisicao, resposta) => {
    resposta.setHeader("Content-Type", "text/html; charset=utf-8")
    resposta.write(`Informações do Sistema: <br>Arquitetura: ${os.arch()}, <br>Plataforma: ${os.platform()}, <br>Tipo: ${os.type()}, <br>Versão: ${os.version()}, <br>Total de RAM: ${os.totalmem}, <br>Total de cpus: ${os.cpus().length}`);
    resposta.write(`<br>CPF: ${CPF.generate()}`)
    resposta.end();
});


servidor.listen(porta, host);

/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
 * um cpf aleatório.
 * TEMPO = 17H00
 */