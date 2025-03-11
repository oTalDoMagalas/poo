class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    apresentar = () => console.log (`olá meu nome é ${this.nome}.`) 
}

class aluno extends Pessoa {
    apresentar = () => console.log (`olá meu nome é ${this.nome} e sou um aluno.`) 
}

class professor extends Pessoa {
    apresentar = () => console.log (`olá meu nome é ${this.nome} e sou um professor.`) 
}

const raul = new professor('raul');
const gustavo = new aluno ('gustavo');

raul.apresentar();
gustavo.apresentar();


