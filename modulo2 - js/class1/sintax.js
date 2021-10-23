/*
1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
   - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
   - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele o texto digitado em um alerta;
   - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'
*/
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

