"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    showUserRole(canShow) {
        if (canShow) {
            return console.log("A regra passada é: " + this.role);
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zezinho", "Admin", true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const car = new Car("Fiat", 3);
//console.log(car.wheels);
//car.showBrand();
//Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 3.0);
//console.log(`Total de rodas é ${a4.wheels} e o motor é ${a4.engine}`);
//a4.showBrand();
//Usando Decorators
//Gera dados e informações automáticas dentro do sistema
//Toda Decorator é uma função
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters() //Vai retornar um objeto com com todos os atributos da classe person mais o id e o createAt
], Person);
const person = new Person("jhony");
console.log(person);
