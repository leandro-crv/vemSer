
// function isPositive(number) {
//     return number >=0;
// }

var isPositive = (number) => {
    if(typeof number !=='number') return "Número inválido";
    return number > 0;
}
console.log(isPositive(7))
console.log(isPositive(-7))
console.log(isPositive('7'))



// function randomNumber() {
//     return Math.random;
// }
var randomNumber = () => Math.random;





// document.addEventListener('click', /*daqui p frente, substitua por arrow*/  function() {
//     console.log('Click');
// });

document.addEventListener('click', () => console.log('click'));

/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 

    var listaDeAlunos = [];

    var adicionarAlunoALista = aluno => {
        if(typeof aluno.nome !=='string' || !aluno.nome.length || typeof aluno.idade !=='number'){
            return "aluno inválido";
        }
        
        listaDeAlunos.push(aluno);
    
    }
        
      
    adicionarAlunoALista({nome: 'alberto', idade: 10});
    adicionarAlunoALista({nome: 'bernardo',idade: 14});
    adicionarAlunoALista( {nome:'carolina',idade:16});
    adicionarAlunoALista({nome:'teste'});
    adicionarAlunoALista({nome:'',idade:10});
    adicionarAlunoALista({nome:40,idade:'10'});



    var encontrarAluno = nomeAluno => listaDeAlunos.find(nome => nome.nome === nomeAluno);
    encontrarAluno('bernardo');