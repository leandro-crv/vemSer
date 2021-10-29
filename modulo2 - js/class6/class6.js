/* 
    Temos uma petshop, então precisamos:
    - ter os nossos pets (class Pet);
    - vão ter, nome, raça, idade;
    - nossos pets vão poder latirOuMiar() // 'oi meu nome é xxx e minha raça é xxx e idade é xxx';
*/

class Validations{
          
    isString(string){
        if(typeof string ==='string') return true;
        return false;
    }

    isNumber(number){
        if(typeof number === 'number' && number !=='NaN') return true;
        return false;
    }
}

class Pet {
    nome = '';
    raca = '';
    idade = NaN;

    constructor(nome,raca,idade){
        this.nome = new Validations().isString(nome) ? nome : this.nome;
        this.raca = new Validations().isString(raca) ? raca : this.raca;
        this.idade = new Validations().isNumber(idade) ? raca : this.idade;
    }

    latirOuMiar(){
        return  `oi meu nome é ${this.nome} e minha raça é ${this.raca} e idade é ${this.idade}`;
    }
}

var testes = [
    new Pet('gato1', 'vira lata', 10),
    new Pet('cachorro1', 'poodle',15),
    new Pet(3,'teste',10),
    new Pet('pet4',4,20),
    new Pet('pet5','qualquer raça','15')
];


testes.forEach(teste => console.log(teste.latirOuMiar()));