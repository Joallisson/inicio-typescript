let x:number = 35;

//console.log(x);

let user: string = "JOÃO"
//console.log(user)
//console.log(user.toLowerCase())
user = "mateus"
//console.log(typeof user)

const meusNumeros: number[] = [1, 2, 3]
//console.log(meusNumeros)
//console.log(user.toUpperCase())

meusNumeros.push(5);
//onsole.log(meusNumeros)

const usuario : {nome: string, idade: number} = {
    nome: "Joallisson",
    idade: 22
}

//console.log(usuario.nome)
//console.log(usuario)

let qualquer: any = "Olá";
qualquer = 22

let z: number | string = "Alexandra"
let vetor: number[] = [1]

//type alias
type myIdType = string | number
let id: myIdType
id = 56
id = "kjubkjvbk"

//enum
//Tamanho da camisa
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa de gola V",
    size: Size.G
};

//console.log(camisa.size)

//Literal Types
let teste: "autenticado" | null
teste = null

//Funções
function sum(a:number, b:number){
    return a + b;
}

//console.log(sum(1,2))

//Tipando retorno de funções
function olaMundo(n1: string): string{
    return n1
}

//console.log(olaMundo("Muito doido"))

//Tipando função que não retorna nada
function logger(msg: string): void{
    console.log(msg)
}

//Funções com parâmetro opicional
function mandar(nome: string, idade?: number): void{
    if (idade) {
        return console.log(`Olá ${nome}, com ${idade}`)
    }
    
    console.log(`Olá ${nome}`)
    
    
}
//mandar("Joallisson", 22)
//mandar("Joallisson")

//Como usar Interfaces
interface Matematica{
    n1: number,
    n2: number
}
function somar(numeros: Matematica): number{
    return numeros.n1 + numeros.n2
}
//console.log(somar({n1: 1, n2: 2}))

//Checagem de tipos
//narrowing
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
//doSomething(45);
//doSomething(true);

//Função recebe qualquer tipo de array
//generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM ${item}`)
    });
}
const v1: number[] = [1, 2, 3];
const v2: string[] = ["olá", "teste", "frevou"];

//showArraysItems(v1);
//showArraysItems(v2);

//Classes
class User{
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showName() {
        return console.log(`O nome do usuário é ${this.name}`);
    }

    showIdade(canShow: boolean){
        if (canShow) {
            return console.log("A regra passada é: " + this.role);
        }
        console.log("Informação restrita!");
    }
}

const zeca = new User("Zezinho", "Admin", true);
console.log(zeca)
console.log(typeof zeca)

zeca.showName();
zeca.showIdade(false);