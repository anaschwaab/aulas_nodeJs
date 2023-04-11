// Core modules = módulos embutidos

// Módulo operatinal system (os)

const os = require("os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.totalmem());
// console.log(os.hostname());

// Módulo 
const fs = require("fs");

// no primeiro parâmetro é o nome do arquivo e sua extensão, e no segundo parâmetro é o conteúdo do arquivo
fs.writeFileSync("./batata.txt", "Olá, mundo!");

const arquivo = fs.readFileSync("./batata.txt");
// porém ele ainda não retorna em string, precisamos do toString
console.log(arquivo.toString())

fs.writeFileSync("./sistema.txt", `Informações do Sistema: \nArquitetura: ${os.arch()}, \nPlataforma: ${os.platform()}, \nTipo: ${os.type()}, \nVersão: ${os.version()}, \nTotal de RAM: ${os.totalmem}`);