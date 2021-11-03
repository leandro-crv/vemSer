/*
    +===============================================================+
    |                SISTEMA DE PROJETOS E ALOCACOES                |
    +===============================================================+

    Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

    Marcacao {
        dia; (só um number mesmo, ex: 22 )
        horas; (também só um number, ex: 9)
    }

    Colaborador {
        id (unique number);
        nome;
        ?codProjeto;
        marcacoesPonto; (um array de marcação de horas, ex: [ { dia: 22, horas: 9 } ]);
        

        marcarPonto( d, h );
    };

    Projeto {
        codigo (unique number),
        titulo,
        ?colaboradoresAlocados = [],
    };

    Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
    Ex: Validacoes { 
        validaAlgo() {
            return ehValido;
        }
    }

    Para utilizar essas validações, 
    Ex: var mensagem;
    if(new Validacoes().validaAlgo(mensagem)) {
        // só pra exemplificar como utilizar
    }


    Vamos criar um sistema da seguinte forma;
    Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;


    As opções serão:

    1 - Cadastrar Colaborador;
    2 - Cadastrar Projeto;
    3 - Alocar Colaborador; (à algum projeto)
    4 - Desalocar Colaborador;
    5 - Marcar Ponto;
    6 - Ver Lista de Colaboradores Sem Projeto;
    7 - Ver Lista de Projetos Sem Colaboradores;
    8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
    9 - Encerrar Execução do Sistema;
*/


/*-- Inicio da aplicação: listas vazias e função geradora de id --*/

var ultimosIds = { colaborador: 0, projeto: 0 };
// var listaDeColaboradores = [new Colaborador('Leandro'),new Colaborador('Felipe'),new Colaborador('Tiago'), new Colaborador('Jane')];
// var listaDeProjetos = [new Projeto('Jogo da velha'), new Projeto('Layout css'), new Projeto('Linkedin')];

class GeradorDeId {
    gerarIdColaborador() {
        ultimosIds.colaborador++;
        return ultimosIds.colaborador;
    }
    gerarIdProjeto() {
        ultimosIds.projeto++;
        return ultimosIds.projeto;
    }
}

/*-- MENU PRINCIPAL DA APLICAÇÃO --*/


function menu(){
    
    let opcao = Number.parseInt(prompt("Bem-vindo ao sistema de projetos e alocações \n Escolha uma opção: \n 1 - Cadastrar Colaborador; \n 2 - Cadastrar Projeto; \n 3 - Alocar Colaborador; (à algum projeto) \n 4 - Desalocar Colaborador; \n 5 - Marcar Ponto; \n 6 - Ver Lista de Colaboradores Sem Projeto; \n7 - Ver Lista de Projetos Sem Colaboradores \n 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;\n 9 - Encerrar Execução do Sistema;"));

     switch (opcao){
        case 1:
            cadastrarColaborador();
            menu();
            break;
        case 2:
            cadastrarProjeto();
            menu();
            break;
        case 3:
            alocarColaboradorAProjeto();
            menu();
            break;
        case 4:
            desalocarDeProjeto();
            menu();
            break;
        case 5:
            marcarPonto();
            menu();
            break;
        case 6:
            listarColaboradoresSemProjeto();
            menu();
            break;
        case 7:
            listarProjetosSemColaboradores();
            menu();
            break;
        case 8:
            listarColaboradoresSemPonto();
            menu();
            break;
        case 9:
            return;
        default:
            console.log('Opção inválida');

    }


}

/*-- Validações; função de pesquisa de posição em array; mensagens de erro (alert) e sucesso (console.log) --*/
class Validacoes {

    ehStringValida(string) {
        if (typeof string === 'string' && string.length > 0) return true;
        return false;
    }

    ehNumber(number) {
        if (typeof number === 'number' && number !== 'NaN') return true;
        return false;
    }
    ehDia(dia) {
        if (typeof dia === 'number' && dia !== 'NaN' && dia > 0 && dia < 32) return true;
        return false;
    }
    ehHora(hora) {
        if (typeof hora === 'number' && hora !== 'Nan' && hora >= 0 && hora <= 24) return true;
        return false;
    }
}

function posicaoDoIdNaLista(id, lista) {
    if (lista === 'listaDeProjetos') {
        return listaDeProjetos.findIndex(projeto => projeto.codigo === id);
    }
    else if (lista === 'listaDeColaboradores') {
        return listaDeColaboradores.findIndex(colaborador => colaborador.id === id);
    }
}

function encontrarObjeto(id,lista){
    if(lista==='listaDeProjetos'){
        return listaDeProjetos.find(p => p.codigo===id);
    }
    else if(lista==='listaDeColaboradores'){
        return listaDeColaboradores.find(c => c.id===id);
    }
}

const MENSAGEM_ERRO_OPCAO_INVALIDA = "Opção inválida. Escolha uma opção entra 1 e 9.";
const MENSAGEM_ERRO_ID_NAO_ENCONTRADO = "Erro: id informado não foi encontrado. Verifique se digitou corretamente.";
const MENSAGEM_ERRO_NOME_INVALIDO = "Erro: nome digitado não é válido.";
const MENSAGEM_SUCESSO_CADASTRO = "Cadastro realizado com sucesso: ";


/*-- Colaborador --*/

class Colaborador {
    id = new GeradorDeId().gerarIdColaborador();
    nome = '';
    codProjeto=0;
    marcacoesPonto = [];

    constructor(nome) {
        this.nome = new Validacoes().ehStringValida(nome) ? nome : this.nome;
    }

    marcarPonto(marcacao) {
        console.log('função marcarPonto', marcacao)
        if (marcacao.dia !== null && marcacao.horas !== null) {
            this.marcacoesPonto.push({marcacao});
        }
    };

};

/*-- Marcação --*/
class Marcacao {
    dia = null;
    horas = null;

    constructor(dia, horas) {
        this.dia = new Validacoes().ehDia(dia) ? dia : this.dia;
        this.horas = new Validacoes().ehHora(horas) ? horas : this.horas;
    }
}


/*--Projeto --*/

class Projeto {
    codigo = new GeradorDeId().gerarIdProjeto();
    titulo = '';
    colaboradoresAlocados = [];
    
    constructor(titulo){
        this.titulo = new Validacoes().ehStringValida(titulo) ? titulo : this.titulo;
    }
}



// var listaDeColaboradores = [new Colaborador('Leandro'),new Colaborador('Refael'),new Colaborador('Tiago'), new Colaborador('Joao')];
// var listaDeProjetos = [new Projeto('Jogo da velha'), new Projeto('Layout css'), new Projeto('Linkedin')];

// 1 - Cadastrar Colaborador;

function cadastrarColaborador() {
    let nome = prompt("Digite o nome do colaborador");
       
    if (nome.length > 0) {
        let novoColaborador = new Colaborador(nome);
        listaDeColaboradores.push(novoColaborador);
        console.log(MENSAGEM_SUCESSO_CADASTRO, novoColaborador);
       
    }
    else{
        alert(MENSAGEM_ERRO_NOME_INVALIDO);
       
    }
}

// 2 - Cadastrar Projeto;

function cadastrarProjeto(){
    let titulo = prompt("Digite um titulo para o projeto");
    if(titulo.length > 0){
        let novoProjeto = new Projeto(titulo);
        listaDeProjetos.push(novoProjeto);
    }
    else{
        alert(MENSAGEM_ERRO_NOME_INVALIDO);
    }
    
   
}

// 3 - Alocar Colaborador; (à algum projeto)

function alocarColaboradorAProjeto() {
    let idColaborador = Number.parseInt(prompt("Informe o id do colaborador"),10);
    let idProjeto = Number.parseInt(prompt("Informe o código do projeto"),10);
    let colaborador = encontrarObjeto(idColaborador,'listaDeColaboradores');
    let projeto = encontrarObjeto(idProjeto,'listaDeProjetos')
   
    if (colaborador !==undefined && projeto !==undefined) {
        colaborador.codProjeto = idProjeto;
        projeto.colaboradoresAlocados.push(colaborador);
        console.log(`colaborador ${colaborador.nome} alocado ao projeto ${projeto.titulo} com sucesso!`);
       
    }
    else {
        alert(MENSAGEM_ERRO_ID_NAO_ENCONTRADO);
       
    }
}

// 4 - Desalocar Colaborador;
function desalocarDeProjeto() {
    let idColaborador = Number.parseInt(prompt("Informe o id do colaborador"),10);
    let colaborador = encontrarObjeto(idColaborador,'listaDeColaboradores');

    
    if (colaborador!==undefined && colaborador.codProjeto!==0) {
        let projeto = listaDeProjetos.find(p => p.codigo === colaborador.codProjeto);
        projeto = projeto.colaboradoresAlocados.filter(c => c.id !==colaborador.id);
        colaborador.codProjeto=0;
        console.log(`colaborador ${colaborador.nome} desalocado do projeto ${projeto.titulo} com sucesso!`);
       
    }
    else {
        alert(MENSAGEM_ERRO_ID_NAO_ENCONTRADO);
       
    }
}
// 5 - Marcar Ponto;

function marcarPonto(){
    let idColaborador = Number.parseInt(prompt("Informe o id do colaborador"),10);
    let colaborador = encontrarObjeto(idColaborador,'listaDeColaboradores');
    if(colaborador ===undefined){
        alert(MENSAGEM_ERRO_ID_NAO_ENCONTRADO);
        return
       
    }

    let dia = Number.parseInt(prompt("Informe o dia de trabalho"),10);
    let horas = Number.parseInt(prompt("Informe o número de horas trabalhadas"),10);
    let marcacao = new Marcacao(dia,horas);
    if(marcacao.dia!==null && marcacao.horas!==null){
        listaDeColaboradores.find(c => c.id===idColaborador).marcarPonto(marcacao);
        console.log(`Ponto marcado com sucesso!`);
    }
    else{
        console.log(`Não foi possível marcar o ponto do colaborador ${colaborador.nome}, pois os dados são inválidos.`)
    }

}

// 6 - Ver Lista de Colaboradores Sem Projeto;
var listarColaboradoresSemProjeto = () => {
    console.log('colaboradores sem projeto: ', listaDeColaboradores.filter(colaborador => colaborador.codProjeto===0));
   

}

// 7 - Ver Lista de Projetos Sem Colaboradores;
var listarProjetosSemColaboradores = () => {
    console.log('projetos sem colaboradores: ', listaDeProjetos.filter(projetos => projetos.colaboradoresAlocados.length===0));
   
}
// 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
var listarColaboradoresSemPonto = () => {
    console.log('colaboradores que não marcaram ponto: ',listaDeColaboradores.filter(colaborador => colaborador.marcacoesPonto.length===0));
   
}

// 9 - Encerrar Execução do Sistema; apenas return



// inicia o programa
menu();
