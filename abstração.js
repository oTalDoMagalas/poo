class Pessoa{
    constructor(nome){
        if(this.constructor === Pessoa){
            throw new error("não pode criar este objeto")
        }
        this.nome = nome
    }
}

class aluno extends Pessoa {
}

const gustavo = new aluno ('gustavo')

console.log(gustavo.nome)