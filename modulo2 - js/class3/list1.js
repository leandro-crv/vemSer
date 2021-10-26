// 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;
var lista = [1, 'Olá', undefined, 99999, 'Texto qualquer'];
imprimirLista(lista);
function imprimirLista(lista){
    for(let i = 0; i< lista.length; i++){
        console.log(lista[i]);
    }
}

// 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
//    e todos caracteres em maiúsculo;

function formatarString(string){
    if(typeof string !== 'string'){
        return 'Você deve passar uma string';
    }
    return string.trim().toUpperCase();
}

formatarString(' leandro carvalho ')


// 3) Crie função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma função de Callback que seja 
//    chamada caso algum dos números informados seja inválido.

//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';
function somar(n1,n2, Callback){
    if(isNaN(n1)|| isNaN(n2) || n1===undefined || n2===undefined){
        Callback();
    }
    else{
        console.log('Soma é: ', n1 + n2);
    }
    function Callback(){
        console.log('Algum número digitado foi inválido');
    }
}

somar(2,8)
somar('h',7)