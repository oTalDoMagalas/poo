//Criando um objeto de aluno

const aluno = {
    nome: "xadão",
    idade: 89,

    estudar: () => console.log
    (`${aluno.nome} está estudando.`),

};

console.log(aluno.nome);
aluno.estudar();
