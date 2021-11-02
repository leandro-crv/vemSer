
/* -- Jogadores --*/
class Jogador{
    nome = '';
    simbolo='';
    cor = '';
    placar = 0;

    constructor(nome,simbolo,cor){
        this.nome = nome;
        this.simbolo = simbolo;
        this.cor = cor;
    }
}

const jogador1 = new Jogador('jogador1','x','red');
const jogador2 = new Jogador('jogador2','o','blue');

/*-- Casas do tabuleiro (realizada inicialização aqui para variável ser usada por funções abaixo) --*/

var casasDoTabuleiro = document.querySelectorAll('.col');
casasDoTabuleiro.forEach(c => c.addEventListener('click',(event)=> jogar(event.target.id)));


/*-- Partida --*/
var jogadas = 0;
var proximoAJogar = jogador1;

document.getElementById('controle-jogo').addEventListener('click',() => iniciarJogo());

function iniciarJogo(){
    // Troca mensagem no botão
    if(document.getElementById('controle-jogo').innerText==='Iniciar jogo') {
        document.getElementById('controle-jogo').innerText='Recomeçar jogo';
    }

    // Insere configurações iniciais da partida
    jogadas = 0;
    proximoAJogar=jogador1;

    // Limpa tabuleiro e mensagens
    [...casasDoTabuleiro].forEach(c => c.innerText='');
    document.getElementById('titulo-resultado').innerText='';
}

const trocaJogador = () => {
    proximoAJogar === jogador1 ? proximoAJogar=jogador2 : proximoAJogar=jogador1;
    document.getElementById('proximo-a-jogar').innerText = `Próximo a jogar: ${proximoAJogar.simbolo} - ${proximoAJogar.nome} `

}

/*-- Jogar --*/

function jogar(id){
    const casa = document.getElementById(id);
    if(casa.innerText.length){
        console.log('Não é possível jogar nesta posição!')
    }
    else{
        casa.innerText = proximoAJogar.simbolo;
        jogadas++;
        verificaTabuleiro(parseInt(id));
        trocaJogador();
    }
}

/* -- Lógica do jogo --*/

const combinacoesParaVitoria = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8],[2,4,6]];

function verificaTabuleiro(casa){
 const simboloNaCasa = document.getElementById(casa).innerText;
 let resultado = 'empate';
 // Não tem como ter ganho o jogo ainda
    if(jogadas < 5){
     return
    }
    
    const possibilidadesAtuais = combinacoesParaVitoria.filter(c => c.some(element => element===casa));
    console.log('possibilidades de vitória',possibilidadesAtuais);
    possibilidadesAtuais.forEach(p => {
        if(p.every(valor => document.getElementById(valor).innerText===simboloNaCasa)){
            resultado = proximoAJogar;
            fimDeJogo(resultado);
            return
        }       
        
    })

    if(jogadas===9 && resultado=='empate') fimDeJogo(resultado);

}

function fimDeJogo(resultado){
    bloquearTabuleiro();
    if(resultado!=='empate'){
     resultado.placar++;
     atualizarPlacar();
     mensagemFimDeJogo(resultado.nome)
    }
    else{
        mensagemFimDeJogo(resultado)
    }    
}

const mensagemFimDeJogo = resultado => resultado==='empate' ? document.getElementById('titulo-resultado').innerText = `O jogo empatou!` : document.getElementById('titulo-resultado').innerText = `O ${resultado} venceu!`;

function bloquearTabuleiro(){
    const casasEmBranco = [...casasDoTabuleiro].filter(c => c.innerText==='');
    casasEmBranco.forEach(cB => cB.innerText='-')
}

function atualizarPlacar(){
    document.getElementById('resultado-jogador1').innerText = jogador1.placar;
    document.getElementById('resultado-jogador2').innerText = jogador2.placar;
}




