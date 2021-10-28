// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';

function contaVogaisEConsoantes(string){
    
    if(typeof string !=='string'){
        return "Você deve digitar uma string";
    }

    var arrayString = [];
    let vogais = 0;
    let consoantes = 0;

    let regexLetra = new RegExp('[a-z]', 'i');
    for(let i=0; i< string.length; i++){
        if(regexLetra.exec(string[i])){
            arrayString.push(string[i]);
        }
    }
    
    let regexVogal = new RegExp('[aeiou]','i');
    for(let i=0;i<arrayString.length;i++){
        if(regexVogal.exec(arrayString[i])){
            vogais++;
        }
        else{
            consoantes++;
        }
    }

    return `A string [${string}] tem ${vogais} vogais e ${consoantes} consoantes`
}
contaVogaisEConsoantes('leandro')
contaVogaisEConsoantes();
contaVogaisEConsoantes(10);
contaVogaisEConsoantes('');