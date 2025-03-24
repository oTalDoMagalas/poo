<?php

class Aluno {
    public $nome;
    public $idade;

    public function __construct($nome, $idade) {
        $this->idade = $idade; 
        $this->nome = $nome;
    }

    public function estudar() {
        echo "Idade do aluno: {$this->idade}";
    }
}

//criando obj

$gustavo = new Aluno("gustavo", 18);
$rafael = new Aluno("rafael", 20);

    echo $gustavo->nome;
?>