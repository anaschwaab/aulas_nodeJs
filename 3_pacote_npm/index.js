const CPF = require("cpf");
const fs = require("fs");

let numeros = [];
for (let i = 0; i < 1000; i++) {
    numeros.push(CPF.generate());
}
fs.writeFileSync("./cpfs.txt", numeros.join("\n"))

const arquivoCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
for (let cpf of arquivoCpfs){
    console.log(cpf)
}


/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */


/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */