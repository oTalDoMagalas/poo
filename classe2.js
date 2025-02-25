class aluno{
    #nota
    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
        }
        feliz = () => console.log(`${this.nome} de ${this.idade} esta muito feliz estudando. e esta coma nota ${this.#nota}`);
        verNOTA = () => this.#nota;
}

const gustavo = new aluno("gustavo", 17, 10)

gustavo.feliz()

