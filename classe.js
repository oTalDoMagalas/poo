//Criando a classe Aluno
class Aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }
        estudar = () => console.log(`${this.nome} esta estudando.`);
}

const rafael = new Aluno("rafael", 17)

console.log(rafael.nome, rafael.idade);

class aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }
        feliz = () => console.log(`${this.nome} esta muito feliz estudando.`);
}

const gustavo = new aluno("gustavo", 17)

console.log(gustavo.nome, gustavo.idade);
gustavo.feliz();
