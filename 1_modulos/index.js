// aqui poderia chamar de batata ou funcaoImc, mas eu escolhi usar o mesmo nome do moduloImc.js
const moduloImc = require("./moduloImc");

const calculadora = require("./moduloCalculadora");

const conversor = require("./moduloConversores");

const usuarios = require("./moduloUsuarios");

const moduloLogin = require("./moduloLogin");

// console.log(calculadora.soma(1, 1))

const resultado = moduloImc.calcularImc(87.5, 1.88);
console.log(moduloImc.statusImc(resultado));

console.log(conversor.toFahrenheit(55))
console.log(conversor.toCelsius(55))

console.log(moduloLogin("goettensana@gmail.com", "12385"));