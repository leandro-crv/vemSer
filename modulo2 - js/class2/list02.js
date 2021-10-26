/*
1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine o salário atual desse funcionário (2021);

*/

/* Regra de negócio que entendi: 
     ano   -     taxa   -    salario
     2016         0            1000
     2017         0,015        1.015,00
     2018         0,03         1.045,45
     2019         0,06         1.108,18
     2020         0,12         1.241,16
     2021         0,24         1.539,04      
*/


var salario = 1000;
var taxa = 0.015;

for(let ano = 2017; ano <= 2021; ano++){
    
    if(ano <2018){
        salario+= salario*taxa
    }
    else{
        taxa *= 2;
        salario += salario*taxa
    }
    console.log(`
        ano: ${ano},
        taxa: ${taxa},
        salario: ${salario}
    `)
}

console.log('salario final em 2021 é: ', salario)


// 2) Faça um programa que calcule a soma dos primeiros 50 números pares;

var quantidadeDePares = 50;
var soma = 0;
for(let i=2; i<= quantidadeDePares*2; i+=2){
    soma+= i;
}
console.log(`soma dos primeiros ${quantidadeDePares} números pares é: ${soma}`);

//3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
do{
    var tabuada = Number.parseInt(prompt('Qual tabuada você gostaria de ver? - apenas algarismos'),10);

}while(isNaN(tabuada) || tabuada===undefined)

for(let i= 1; i<=10;i++){
        console.log(`${i} * ${tabuada} = ${i*tabuada}`)
}


 // 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;

 for(let i=2; i<=100; i+=2){
     console.log(`${i}² = ${i*i}`)
 }

 // 5) Faça um algoritmo que apresente o quadrado de cada um dos números ímpares entre 100 e 1; (Decremento)

 for(let i = 99; i>0; i-=2){
     console.log(`${i}² = ${i*i}`)
 }

 // 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;

var somatorio = 0;
var numerosInseridos = 0;

do{
    var numeroDigitado = Number.parseInt(prompt("Digite um número"),10)
    if(isNaN(numeroDigitado) || numeroDigitado===undefined){
        alert('Digite um número válido')
    }
    else{
        somatorio+= numeroDigitado;
        numerosInseridos++;
    }

}while(numerosInseridos <5)

console.log('somatório é ', somatorio)
