function exe1(){
    var resposta = prompt('Digite um texto');

    if(resposta==='SIM'){
    alert("Parabéns");
    }
    else if(resposta==="Não"){
    var novoTexto = prompt('Informe um texto')
    alert(novoTexto)
    }
    else{
    confirm('Você tem noção dos seus atos?')
    }
}

function exe2(){
    var cliente = prompt("Digite o nome do cliente");
    var atendente = prompt ("Digite o nome do atendente");
    alert(`Olá ${cliente} eu me chamo ${atendente}, em que posso ajudar?`)

}

function exe3(){
    var isFriday = confirm('Hoje é sexta-feira?');
    console.log('isFriday ', isFriday)
    var isTwoGreaterThanFour = 2 > 4;
    console.log('isTwoGreaterThanFour ' , isTwoGreaterThanFour)
    
    var info = prompt("Digite uma informação");
    var isEmpty = info===null || info===undefined || info.length === 0;
    console.log('isEpty ',isEmpty) 

}

function exe4(){
    var n1 = Number.parseInt(prompt('Digite o primeiro número'));
    console.log('n1',n1);
     
    var operando = prompt("Insira o operando");
    var n2 = Number.parseInt(prompt('Digite o segundo número'));
    console.log('n2',n2)
    if(!isNaN(n1) && !isNaN(n2) && (n1 && n2)!==undefined && (n1 && n2)!==null && (operando ==='+' || operando ==='-' || operando ==='*' || operando==='/')){
        
        console.log('Tudo certo com os números')
        if(n2===0 && operando==='/'){
            alert('Erro: não é possível dividir um número por zero');
        }
    }
    else{
        alert('Há um erro nas informações');
    }
}

function exe5(){
    var t1 = Number.parseFloat(prompt('Digite a nota t1'));
    var t2 = Number.parseFloat(prompt('Digite a nota t2'));
    var p1 = Number.parseFloat(prompt('Digite a nota p1'));

    if(!isNaN(t1) && !isNaN(t2) && !isNaN(p1)){
        var media = (t1 + t2 + p1)/3;
        if(media<5){
            alert('Reprovado');
        }
        else if(media >= 5 && media < 7){
            alert('Recuperação')
        }
        else{
            alert('Parabéns, aprovado!')
        }
    }
    else{
        alert('Você inseriu uma nota inválida');
    }
}

function exe6(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
}

function exe7(){
    var array = [1,2,7,10,18];
    var soma = 0;
    for(i=0; i< array.length; i++){
        soma+= array[i]
    }
    console.log(`soma dos números do array é: ${soma}`)

}


function exe8(){
    chamarPrompt()
    function chamarPrompt(){
        var resposta = prompt('Escolha a alternativa: 1 - continuar perguntando; 2- Parar de perguntar')
        if(resposta==='2'){
            return
        }
        else if(resposta==='1'){
            chamarPrompt()
        }
        else{
            alert('Opção inválida')
            chamarPrompt()
        }
    }
}


function exe9(){
    var pergunta = prompt('Escolha a alternativa: 1 - Sextou; 2 - Ainda não sextou');
    if(pergunta!=='1' && pergunta!=='2'){
        alert('Alternativa inválida')
    }
    else if(pergunta==='1'){
        console.log('Sextou')
    }
    else{
        console.log('Ainda não sextou')
    }
}