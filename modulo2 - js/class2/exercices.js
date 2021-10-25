
// 1) Crie um programa que imprima no console os números de 1 até 10;

for(let i=0; i<=10;i++){
    console.log(i)
}

/* 2) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
e imprima no console a soma de todos os elementos, neste caso seria 38; */

var array = [1, 2, 7, 10, 18];
var somatorio = 0;
for(let i=0; i< array.length; i++){
    somatorio+= array[i];
};
console.log('somatório do array: ', somatorio);

/*3) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção. */

do{
    var chamarPrompt = prompt('Escolha a opção: \n 1 - Continuar perguntado \n 2 - Parar de perguntar')

    chamarPrompt!=='1' && chamarPrompt!=='2' ? alert('Você deve digitar 1 ou 2') : null;

} while(chamarPrompt!=='2')



/* 4) Crie um programa que atribua à uma varíavel e imprima no console ao final da execução os textos: 
   'Sextou' ou 'Ainda não sextou' de acordo com a resposta do usuário, códigos 1 e 2 respectivamente; */

   var pergunta = prompt('Escolha a opção:\n 1 - Sextou \n 2 - Ainda não sextou');
   const OPCAO_1 = 'Sextou';
   const OPCAO_2 = 'Ainda não sextou'
   pergunta ==='1' || pergunta==='2'? 
        pergunta==='1' ? console.log(OPCAO_1) : console.log(OPCAO_2)
        : alert('O valor digitado está incorreto');

