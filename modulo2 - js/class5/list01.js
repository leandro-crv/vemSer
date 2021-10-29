/*
    +============================================================+
    |                    CADASTRO DE PRODUTOS                    |
    +============================================================+

    Imaginando que teremos o seguinte produto:
    
    (modelo do objeto)
    {
        id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
        descricao: "",  (string)
        valor: 0        (number)
    }

    Teremos também uma lista de produtos que será uma variável de escopo global (var listaDeProdutos = []);

    Criem um sistema onde seja possível:

    Obs: (utilizem pelo menos 2 arrow functions);

    1) Cadastrar um produto;
        - cuidado para não ter o mesmo id (identificador);

    2) Excluir um produto pelo código (USAR filter);

    3) Encontrar um produto pelo código (USAR find);

    4) Imprimir no console a lista de produtos cadastrados (USAR forEach);


    


    ***EXTRA (NÃO OBRIGATÓRIO)***
    E) Verificar o total de patrimônio da loja (valor total de todos os produtos, USAR reduce);
*/


var listaDeProdutos = [];
const MENSAGEM_ERRO_PRODUTO = "Este produto não pode ser cadastrado pois não cumpre os requisitos do sistema.";
const MENSAGEM_ID_EXISTENTE = "Este produto não pode ser cadastrado pois seu id já pertence a outro produto.";
const MENSAGEM_ERRO_EXCLUIR = "Não foi possível excluir o produto. Informe um código (id) válido.";
const MENSAGEM_ERRO_ENCONTRAR = "Não foi possível encontrar o produto. Informe um código (id) válido.";

function produtoEhValido(produto) {
    if (typeof produto.id !== 'number') return false;
    if (typeof produto.descricao !== 'string') return false;
    if (typeof produto.valor !== 'number') return false;

    return true;
}

function cadastrarProduto(produtoNovo) {
    if (listaDeProdutos.find(produto => produto.id === produtoNovo.id) !== undefined) {
        return MENSAGEM_ID_EXISTENTE;
    }
    else if (!produtoEhValido(produtoNovo)) {
        return MENSAGEM_ERRO_PRODUTO;
    }

    listaDeProdutos.push(produtoNovo);
}

// testa se o código passado pelo cliente é um número e se este número existe na lista - função usada para excluir e encontrar produtos
function codigoEhNumeroETaNaLista(codigo){
    if (typeof codigo !== 'number' || listaDeProdutos.find(produto => produto.id === codigo) === undefined){
        return false;
    }
    return true
}

var excluirProduto = codigo => {
    if (codigoEhNumeroETaNaLista(codigo)) {
        listaDeProdutos = listaDeProdutos.filter(produto => produto.id !== codigo);
    }
    else {
        return MENSAGEM_ERRO_EXCLUIR;
    }
}


var encontrarProduto = codigo => {
    if (codigoEhNumeroETaNaLista(codigo)) {
        return listaDeProdutos.find(produto => produto.id === codigo);
    }
    else{
        return MENSAGEM_ERRO_ENCONTRAR;
    }
}

var imprimirListaDeProdutos = () => listaDeProdutos.forEach(produto => console.log(produto));



var verificarTotalDePatrimonio = () => {
    return listaDeProdutos.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual.valor;
    }, 0);
}

/* -- TESTES --*/

var produto1 = {
    id: 1,
    descricao: 'produto 1',
    valor: 10
}

var produto2 = {
    id: 2,
    descricao: 'produto 2',
    valor: 20
}

var produto3 = {
    id: 3,
    descricao: 'produto 3',
    valor: 30
}

var produtoSemId = {
    descricao: 'produto sem id',
    valor: 10
}

var produtoSemValor = {
    id: 4,
    descricao: 'produto sem valor',
}

var produtoSemDescricao = {
    id: 5,
    valor: 50
}

var produtosDeTeste = [produto1, produto2, produto3, produtoSemId, produtoSemValor, produtoSemDescricao];

produtosDeTeste.forEach(teste => cadastrarProduto(teste));