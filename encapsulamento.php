<?php
class Aluno {
    public $nome;
    public $idade;
    public $nota; // Atributo 

    public function __construct($nome, $idade, $nota) {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->nota = $nota;
    }
    public function verNota(){
        return $this->nota;
    }
}

$gustavo = new Aluno ("gustavo", 38, 9);

echo $gustavo->nome;
echo $gustavo->verNota();


?>