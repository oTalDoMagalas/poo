<?php

class Pessoa {
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function apresentar() {
        echo "Olá, eu sou {$this->nome}. ";
    }
}

class Aluno extends Pessoa {
    public function apresentar() {
        echo "Olá, eu sou {$this->nome} e sou um aluno. ";
    }
}

// A classe Professor herda de Pessoa e sobrescreve o método apresentar
class Professor extends Pessoa {
    public function apresentar() {
        echo "Olá, eu sou o professor {$this->nome}. ";
    }
}

// Criando objetos
$gustavo = new Aluno("gustavo");
$João = new Professor("João");

// Chamando métodos
echo $gustavo->apresentar();
echo $João->apresentar();

?>
