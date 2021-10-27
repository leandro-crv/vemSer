// 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;

function invertaNumero(numero){
    
    if(typeof numero !== 'number'){
        return 'Passe um número válido';
    }

    var numeroInvertido = [];
    var numeroArray = numero.toString().split('');
        
    for(let i= numeroArray.length - 1; i>=0; i--){
        numeroInvertido.push(numeroArray[i]);
    }


    return Number.parseInt(numeroInvertido.join(''),10);
}

invertaNumero(123456);
invertaNumero('teste');

// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, loga: 3  e loga:  7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, loga: 3

function segundoMenorESegundoMaior(array){

    if(typeof array !=='object' || !array.length || array.some(element => typeof element !=='number')){
        return 'insira um array de números';
    }

    for(let i=0; i< array.length;i++){
        for(let j = i+1; j < array.length;j++){
            if(array[i] > array[j]){
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }

    }

    var segundoMenor = array[1];
    var segundoMaior = array[array.length - 2];

    console.log(`segundo menor ${segundoMenor}; segundo maior ${segundoMaior}`);
}

segundoMenorESegundoMaior( [1, 3, 5, 7, 9] );
segundoMenorESegundoMaior('teste');
segundoMenorESegundoMaior([1,2,'teste',4]);





// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
   // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

   function colocaPrimeiraLetraEmMaiusculo(frase){
       if(typeof frase !=='string' || !frase.length){
           return "O parâmetro deve ser uma string!";
       }

       // transforma a string frase em um array, separado por palavra;
       var arrayFrase = frase.trim().split(' ');

       for(let i=0; i< arrayFrase.length;i++){
           
        arrayFrase[i] = arrayFrase[i][0].toUpperCase() + arrayFrase[i].substr(1).toLowerCase();
       }

       return arrayFrase.join(' ');
    }

    colocaPrimeiraLetraEmMaiusculo('nossa dupla é demais');
    colocaPrimeiraLetraEmMaiusculo();
    colocaPrimeiraLetraEmMaiusculo('');
    colocaPrimeiraLetraEmMaiusculo(44);

/* ---- EXERCÍCIOS EXTRAS --- */

    // 1) Crie uma função que receba uma string e retorne a maior palavra dentro da string 
   // exemplo: minhaFuncao( 'Eu adoro Javscript' ) => retorna 'Javascript'

   function minhaFuncao(frase) {
    var maximo = 0
    var posicao = 0
    var arrayPalavras = frase.trim().split(' ');
    console.log(arrayPalavras)

    for(i = 0; i < arrayPalavras.length; i++) {
        if (arrayPalavras[i].length > maximo) {
            maximo = arrayPalavras[i].length;
            posicao = i;
            console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} máximo: ${maximo} \n posição no array ${posicao} - ALTEROU MÁXIMO`)
        }
        console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} \n - NÃO alterou máximo`)
    }
    return arrayPalavras[posicao]
}
minhaFuncao('Eu adoro Javascript')


// 2) Crie uma função que receba uma string e retorna a quantidade de vogais na string;

function minhaFuncao(frase) {
    var arrayPalavras = frase.trim().split(' ');
    console.log(arrayPalavras)
    var maximo = 0
    var posicao = 0

    for(i = 0; i < arrayPalavras.length; i++) {
        if (arrayPalavras[i].length > maximo) {
            maximo = arrayPalavras[i].length;
            posicao = i;
            console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} máximo: ${maximo} \n posição no array ${posicao} - ALTEROU MÁXIMO`)
        }
        console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} \n - NÃO alterou máximo`)
    }
    return arrayPalavras[posicao]
}
minhaFuncao('Eu adoro Javascript')



function funcaoVogal(string) {
    var arrayVogais = string.trim().split('');
    console.log(arrayVogais)
    var numero = 0

    for(i=0; i < arrayVogais.length; i++) {
        let letra = arrayVogais[i]
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            numero += 1
        }
    }
    return numero
}
funcaoVogal('aaaaaaaabcdef')