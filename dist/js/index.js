"use strict";
let x = 35;
//console.log(x);
let user = "JOÃO";
//console.log(user)
//console.log(user.toLowerCase())
user = "mateus";
//console.log(typeof user)
const meusNumeros = [1, 2, 3];
//console.log(meusNumeros)
//console.log(user.toUpperCase())
meusNumeros.push(5);
//onsole.log(meusNumeros)
const usuario = {
    nome: "Joallisson",
    idade: 22
};
//console.log(usuario.nome)
//console.log(usuario)
let qualquer = "Olá";
qualquer = 22;
let z = "Alexandra";
let vetor = [1];
let id;
id = 56;
id = "kjubkjvbk";
//enum
//Tamanho da camisa
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa de gola V",
    size: Size.G
};
//console.log(camisa.size)
//Literal Types
let teste;
teste = null;
//Funções
function sum(a, b) {
    return a + b;
}
//console.log(sum(1,2))
//Tipando retorno de funções
function olaMundo(n1) {
    return n1;
}
//console.log(olaMundo("Muito doido"))
//Tipando função que não retorna nada
function logger(msg) {
    console.log(msg);
}
//Funções com parâmetro opicional
function mandar(nome, idade) {
    if (idade) {
        return console.log(`Olá ${nome}, com ${idade}`);
    }
    console.log(`Olá ${nome}`);
}
function somar(numeros) {
    return numeros.n1 + numeros.n2;
}
//console.log(somar({n1: 1, n2: 2}))
//Checagem de tipos
//narrowing
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
//doSomething(45);
//doSomething(true);
//Função recebe qualquer tipo de array
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM ${item}`);
    });
}
const v1 = [1, 2, 3];
const v2 = ["olá", "teste", "frevou"];
//showArraysItems(v1);
//showArraysItems(v2);
//Classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showName() {
        return console.log(`O nome do usuário é ${this.name}`);
    }
    showIdade(canShow) {
        if (canShow) {
            return console.log("A regra passada é: " + this.role);
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zezinho", "Admin", true);
console.log(zeca);
console.log(typeof zeca);
zeca.showName();
zeca.showIdade(false);
