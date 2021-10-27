//1) Crie uma função que recebe como parâmetro um caracter e um array de caracteres e que remova todas as ocorrências daquele caracter no array; 
// ex. funcaoRemoveCaracterDoTexto('a', [ 'c', 'a', 'texto', 'a' ] ) ===> retorna o array [ 'c', 'texto' ] (removeu todos 'A');

function funcaoRemoveCaracterDoTexto(caracter, array) {
    
    //validações
    if(caracter.length!=1){
        return 'Caractere deve ser de apenas um dígito'
    }

    if(typeof array !=='object' || !array.length){
        return 'array inválido'
    }

    for (let i = 0; i < array.length; i++) {
        
        // verifica se a posição do array possui mais de um caractere. Se sim, faz um laço para verificar cada um.
        if (array[i].length > 1) {
            // Transforma string em array para poder trabalhar com split
            array[i] = array[i].replace(caracter,'')
        }
        else if (array[i] === caracter) {
            array.splice(i,1)
        }
    }
    return array
}
funcaoRemoveCaracterDoTexto('e', ['c', 'a', 'texto', 'a','e']);
funcaoRemoveCaracterDoTexto('eax',['c', 'a', 'texto', 'a','e']);
funcaoRemoveCaracterDoTexto('e','teste')


//2) Crie uma função que receba como parâmetro um array de números e retorne um array ordenado (NÃO pode usar a função array.sort());
   // ex. funcaoOrdenaArray( [4, 7, 3, 0] ) ===> retorna o array [ 0, 3, 4, 7 ] 

   function funcaoOrdenaArray(array){
       
        // percorre todo array
       for(let i=0; i< array.length;i++){
           // percorre da posição do i + 1 até o final
            for(let j= i+1; j< array.length; j++){
                // verifica se i é maior que j
                if(array[i] > array[j]){
                    let aux = array[i];
                    array[i] = array[j];
                    array[j] = aux;
                }
            }
        }
        return array;
    }

   funcaoOrdenaArray( [4, 7, 3, 0] );

//3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam) e retorne uma concatenação destes 2 arrays ("soma");
function concatenarArrays(array1,array2){
    if(typeof array1==='object' && typeof array2==='object'){
        return array1.concat(array2);
    }
    else{
        return 'Algum parâmetro está errado!';
    }
}

concatenarArrays([1,2,3],[4,5,6]);
concatenarArrays('teste',[]);

// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento qualquer como parâmetro e que adiciona esse elemento à lista;
var listaVazia = [];

function adicionarElemento(elemento){
    if(elemento!==null && elemento!==undefined){
        listaVazia.push(elemento);
    }
    else{
        return 'elemento inválido';
    }
}

adicionarElemento('primeiro elemento da lista');
adicionarElemento('segundo elemento da lista');
adicionarElemento('terceiro elemento da lista');
adicionarElemento();

// 4b) Crie outra função para remover o último elemento da lista;

function removerUltimoElemento(lista){
    if(typeof lista ==='object'){
        lista.pop();
    }
    else{
        console.log('lista inválida');
    }
}

removerUltimoElemento([1,2,3]);
removerUltimoElemento('teste');
removerUltimoElemento();
removerUltimoElemento([]);
