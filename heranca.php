<?php

class Pessoa {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function apresentar() {
        echo "Olá, meu nome é {$this->nome} e tenho {$this->idade} anos.";
    }
}

class Aluno extends Pessoa {
    public function estudar() {
        echo "{$this->nome} está estudando.";
    }
}

class Professor extends Pessoa {
    public function ensinar() {
        echo "{$this->nome} está ensinando.";
    }
}

// Criando objetos corretamente
$gustavoAluno = new Aluno("Gustavo", 18);
$alvezProfessor = new Professor("Alvez", 38);

$gustavoAluno->apresentar();
$gustavoAluno->estudar();

$alvezProfessor->apresentar();
$alvezProfessor->ensinar();

?>