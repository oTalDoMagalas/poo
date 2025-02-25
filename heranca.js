//Criar classe Pessoa
//Com parametros nome e idade

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar = () => console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos`);
}

class Aluno extends Pessoa{

}
class Professor extends Pessoa{

}

const Raul = new Professor("Raul", 28)
const gustavo = new Aluno("gustavo", 18)
const lucas = new Aluno("lucas", 16)
const rafael = new Aluno("gustavo", 17)

Raul.apresentar()
gustavo.apresentar()
lucas.apresentar()
rafael.apresentar()