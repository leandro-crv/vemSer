
// PARA TESTAR A APLICAÇÃO: executarTestes();


const validarEmail = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';

        obs: caso o email (value) que está no input for inválido deverá alterar a class da span com id="email-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso o email seja válido adicione a class d-none para que o aviso suma
    */
    let ehValido = false;
    let campoEmail = document.getElementById('email-input-registration');
    // retira os espaços do email
    campoEmail.value = campoEmail.value.replaceAll(' ', '');

    let mensagemErro = document.getElementById('email-registration-error');
    let trocaClasse = () => mensagemErro.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
    let emailDigitado = [...campoEmail.value];

    // começa com letra ?
    if (!ehLetra(emailDigitado[0])) {
        ehValido = false;
        trocaClasse();
        return ehValido;
    }

    //termina com ponto ? 
    if (emailDigitado[emailDigitado.length - 1] === '.') {
        ehValido = false;
        trocaClasse();
        return ehValido;
    }

    // possui @ e sem ponto logo após
    let posicaoArroba = emailDigitado.findIndex(element => element === '@');

    if (posicaoArroba === -1) {
        ehValido = false;
        trocaClasse();
        return ehValido;
    }

    // . após @
    let arrayAposArroba = emailDigitado.slice(posicaoArroba + 1);
    let posicaoPonto = arrayAposArroba.findIndex(element => element === '.');
    if (posicaoPonto === -1 || posicaoPonto === 0 || posicaoPonto === -1) {
        ehValido = false;
        trocaClasse();
        return ehValido;
    }

    // 2 letras após ponto?
    let posicoesDosPontos = [];
    emailDigitado.forEach((e, index) => {
        if (e === '.') {
            posicoesDosPontos.push(index);
        }
    })
    let pontosCorretos = posicoesDosPontos.every(pP => (ehLetra(emailDigitado[pP + 1]) && ehLetra(emailDigitado[pP + 2])));
    if (!pontosCorretos) {
        ehValido = false;
        trocaClasse();
        return ehValido;
    }

    // se nenhuma das condições anteriores retornar false, é válido o email
    ehValido = true;
    trocaClasse();
    return ehValido;


}


const validarSenha = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input password-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        2 - obrigatório ter ao menos um número;
        3 - obrigatório ter ao menos um carácter especial;
        4 - obrigatório ter ao menos 8 caractéres;
        
        // TODO: falta fazer
        1 - obrigatório ter ao menos uma letra minúscula;
        5 - a senha não pode conter espaços em branco;
        6 - obrigatório ter ao menos uma letra maiúscula;

        obs: caso a senha (value) que está no input for inválido deverá alterar a class da span com id="password-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a senha seja válida adicione a class d-none para que o aviso suma
    */

    ehValido = false;

    let senhaDigitada = document.getElementById('password-input-registration').value;
    senhaDigitada.trimEnd();

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let arrayChar = [...senhaDigitada]; // Ex: 'banana123' =>  ['b', 'a', 'n' ....]

    let possuiLetra = arrayChar.some(char => char.toLowerCase() !== char.toUpperCase());


    // é um caracter especial
    let possuiCharEspecial = arrayChar.some(char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)));

    //                                          (      aqui vemos que não é letra     )    ( aqui vemos que é número )
    let possuiNumero = arrayChar.some(char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)));

    // TODO: adicionar regras
    let naoPossuiEspacos = arrayChar.every(char => char !== ' ');

    let possuiLetraMaiuscula = arrayChar.some(char => ehLetra(char) && char === char.toUpperCase());
    let possuiLetraMinuscula = arrayChar.some(char => ehLetra(char) && char === char.toLowerCase());


    if (!possuiOitoCaracteres) {
        ehValido = false;
    }
    if (!possuiLetra) {
        ehValido = false;
    }
    if (!possuiCharEspecial) {
        ehValido = false;
    }
    if (!possuiNumero) {
        ehValido = false;
    }

    ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    let mensagemErro = document.getElementById('password-registration-error');

    mensagemErro.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}


/*-- Funções auxiliares --*/
function ehLetra(char) {
    if (char === undefined) return false;
    if (char.toLowerCase() !== char.toUpperCase()) return true;
    return false;
}

function ehNumero(char) {
    if (!isNaN(parseInt(char) && !ehLetra(char))) return true;
    return false;
}


const validarData = () => { // deve retornar um boolean (true = válido, false = inválido)
    /* 
        adicionar um eventListener para o evento "change" do input date-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data de no mínimo 18 anos atrás; (idade > 18)

        obs: caso a data (value) que está no input for inválido deverá alterar a class da span com id="date-registration-error" para que fique somente com text-danger, sem a parte que diz 'd-none' (display: none) para que mostre a mensagem de erro
            e caso a data seja válida adicione a class d-none para que o aviso suma
    */
    let ehValido = false;
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;
    let dataSemBarras = dataDigitada.replaceAll('/', '');

    if (dataSemBarras.length === 2) {
        inputData.value = dataSemBarras + '/';
    }
    else if (dataSemBarras.length === 4) {
        inputData.value = dataSemBarras[0] + dataSemBarras[1] + '/' + dataSemBarras[2] + dataSemBarras[3] + '/';
    }
    else if (dataSemBarras.length === 8) {
        let dataExiste = moment(dataSemBarras, 'DDMMYYYY', true).isValid();
        let maiorDeIdade = moment().diff(moment(dataSemBarras, 'DDMMYYYY'), 'Years') >= 18;

        if (dataExiste && maiorDeIdade) ehValido = true;
    }

    let mensagemErro = document.getElementById('date-registration-error');

    if (ehValido) {
        mensagemErro.setAttribute('class', 'd-none');
        return ehValido
    }
    else {
        mensagemErro.setAttribute('class', 'text-danger');
        return ehValido;
    }
}




const validarCadastro = () => {
    alert(`Cadastro ${validarData() && validarEmail() && validarSenha() ? 'válido!' : 'inválido'}`);
}



const programa = () => {

}



programa();

/* -- Testes --*/


function executarTestes() {

// email
    var testeEmail = {
        'ponto no inicio': '.teste@teste.com',
        'sem Arroba': 'teste.com',
        'ponto colado no Arroba': 'teste@.com',
        'sem Ponto': 'teste@teste',
        'ponto no final': 'teste@teste.com.',
        'uma letra apenas após o ponto': 'teste@teste.com.b',
        'email Válido': 'teste@teste.com'
    }


    // for in --> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
    let testeCampoEmail = document.getElementById('email-input-registration');
    for (teste in testeEmail) {
        testeCampoEmail.value = testeEmail[teste];
        console.log(`${teste} (${testeEmail[teste]}) é válido: ${validarEmail()}`)
    }

    // senha 
    var testeSenha = {
        'sem Letra': '1234567/+*',
        'sem Numero': 'Aaaaaaaaa*',
        'sem Especial': 'Aa1111111',
        'menos de 8 caracteres': 'Aa*1',
        'sem Maiuscula': 'aaaaaaa1*',
        'sem Minuscula': 'AAAAAAA1*',
        'com Espaco': 'Aa1* aaaaaa',
        'senha Válida': 'Aa/123456'
    }

    let testeCampoSenha = document.getElementById('password-input-registration');
    for (teste in testeSenha) {
        testeCampoSenha.value = testeSenha[teste];
        console.log(`${teste} (${testeSenha[teste]}) é válido: ${validarSenha()}`)
    }

    // data

    var testeData = {
        'data Inexistente': '10202010',
        'data Futura': '10102030',
        'menor de idade': '03112021',
        'data Válida': '04112000'
    }

    let testeCampoData = document.getElementById('date-input-registration')

    for (teste in testeData) {
        testeCampoData.value = testeData[teste];
        console.log(`${teste} (${testeData[teste]}) é válido: ${validarData()}`)
    }
}