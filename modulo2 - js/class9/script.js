class Colaborador {
    id;
    nome;
    dataNascimento;
    email;
    senha;

    constructor(nome,dataNascimento,email,senha){
        this.nome = nome,
        this.dataNascimento = dataNascimento,
        this.email = email,
        this.senha = senha
    }
}



//#region Validação Email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-registration').value;
    mensagemErro = 'email-registration-error';
    if(!emailDigitado.length){
        emailDigitado = document.getElementById('edit-email-input-registration').value;
        mensagemErro = 'edit-email-registration-error';
    }
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

    // para setar o texto de erro em vermelho
    let erroEmail = document.getElementById(mensagemErro);
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
    let mensagemErro = 'password-registration-error';
    let senhaDigitada = document.getElementById('password-input-registration').value;
    if(!senhaDigitada.length){
        senhaDigitada = document.getElementById('edit-password-input-registration').value;
        mensagemErro = 'edit-password-registration-error';
    }
    let listaCaracteres = senhaDigitada.split('');

    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let naoPossuiEspacos = !senhaDigitada.includes(' ');

    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    // para setar o texto de erro em vermelho
    let erroSenha = document.getElementById(mensagemErro);
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => { 
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;
    let mensagemErro = 'date-registration-error';
    console.log('data digitada é',dataDigitada)
    if(!dataDigitada.length){
        console.log('entrei no if do edit')
        inputData= document.getElementById('edit-date-input-registration');
        dataDigitada = inputData.value;
        mensagemErro = 'edit-date-registration-error';
    }
    adicionarMascaraData(inputData, dataDigitada);

    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());

    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

    // para setar o texto de erro em vermelho
    let erroData = document.getElementById(mensagemErro);
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}

const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];
    // [ '1', '0', '0', '5' ]
    
    if(listaCaracteres && listaCaracteres.length) {
        let dataDigitada = listaCaracteres.filter(c => !isNaN(parseInt(c))).reduce((a, b) => a + b);
        // 10052
        const { length } = dataDigitada;

        switch(length) { 
            case 0: case 1: case 2:
                input.value = dataDigitada; 
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}`; // 10/05
                break;
            default:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}/${dataDigitada.substr(4, 4)}`;
        }
    }
}
//#endregion Validação Data


const resetarCampos = (...campos) => {
    console.log('campos são',campos)
    campos.forEach(c => c.value = '');
}

const irPara = (origem, destino) => {
    let elementoOrigem = document.getElementById(origem);
    let elementoDestino = document.getElementById(destino);
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
}

const apagarCampos = (campo) => {
    console.log('campos',campo);
    while (campo.firstChild) {
        campo.removeChild(campo.lastChild);
      }
    
}
//#region Validação Nome
const validarNome = () => {
    let elementoHtml = 'name-input-registration';
    let mensagemErro = 'name-registration-error';
    if(!document.getElementById('name-input-registration').value.length){
        console.log('entrei no edit')
        elementoHtml = 'edit-name-input-registration';
        mensagemErro = 'edit-name-registration-error';
    }
 
    let nomeDigitado = document.getElementById(elementoHtml).value;
    let nomeSemEspaco = nomeDigitado.replaceAll(' ','');
    let ehValido = [...nomeSemEspaco].every(char => (char.toUpperCase() !==char.toLowerCase())===true);
    
    if(ehValido){
        //adiciona máscara
       // console.log('nome com máscara',adicionarMascaraNome('x',nomeDigitado))
        console.log('é válido esse nome');
    }

    let erroNome = document.getElementById(mensagemErro);
    erroNome.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
    
    return ehValido;

}

const adicionarMascaraNome = (input, nome) => {
   let listaNome = nome.split(' ');
    
        listaNome.forEach(n => {
            
            n = n[0].toUpperCase() + n.substr(1).toLowerCase();
        })
        return listaNome.join('');
    
    
}

// dica: utilizar para o editar
const irParaComClick = evento => {
    console.log(evento);

    let funcao = evento.target.id.split('-')[0];
    let id = evento.target.id.split('-')[1];

    if(funcao==='excluir'){
        excluirColaborador(id);
    }
    else if(funcao==='editar'){
        //fazer algo
        permitirEdicao(id);
    }
}


function permitirEdicao(id){
    irPara('home','registration-edit');
    console.log('id é: ',id);
    idEditarAtual = id;
    axios.get(`http://localhost:3000/colaboradores/${id}`)
    .then(response => {
        let dados = response.data;
        document.getElementById('edit-name-input-registration').value = dados.nome;
        document.getElementById('edit-date-input-registration').value=dados.data;
        document.getElementById('edit-email-input-registration').value=dados.email;
        document.getElementById('edit-password-input-registration').value=dados.senha;
        //document.getElementById('id-oculto').innerText=dados.id;
    })
    .catch(error => console.log('erro ao buscar colaborador',error))

}


const validarLogin = () => {
    axios.get('http://localhost:3000/colaboradores')
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                irPara('login', 'home');
            }   
        })
        .catch(error => console.error(error));
}


const listarUsuarios = () => {
    // aqui entra lógica de GET para os usuários
    let lisAnteriores = document.getElementById('user-list').querySelectorAll('li');
    //console.log('lisAnteriores',lisAnteriores)
    lisAnteriores.length ? apagarCampos(document.getElementById('user-list')) : '';
   
    axios.get('http://localhost:3000/colaboradores')
        .then(response => {
            let listaUsuarios = response.data.map(u => u = {id: u.id, nome: u.nome});
            
            console.log(listaUsuarios);

            if(listaUsuarios.length>0){
                let ul = document.getElementById('user-list');
                listaUsuarios.forEach(u => {
                    let li = document.createElement('li');
                    li.setAttribute('id',`user-${u.id}`);
                    
                    let spanNome = document.createElement('span');
                    spanNome.innerText = u.nome;
                    li.appendChild(spanNome);

                    let botaoEditar = document.createElement('button');
                    botaoEditar.innerText = "Editar";
                    botaoEditar.setAttribute('id',`editar-${u.id}`);
                    botaoEditar.setAttribute('name','botao-editar');
                    li.appendChild(botaoEditar);

                    let botaoExcluir = document.createElement('button');
                    botaoExcluir.innerText='Excluir';
                    botaoExcluir.setAttribute('id',`excluir-${u.id}`);
                    botaoExcluir.setAttribute('name','botao-excluir');
                    li.appendChild(botaoExcluir);
                    
                    ul.appendChild(li);
                })

               let listaBotoesExluir = [...document.querySelectorAll("[name='botao-excluir']")];

               listaBotoesExluir.forEach(b => {
                   b.addEventListener('click', irParaComClick)
               });

               let listaBotoesEditar = [...document.querySelectorAll("[name='botao-editar']")];
               listaBotoesEditar.forEach(b=> b.addEventListener('click',irParaComClick));
               
            }


        })
        .catch(error => console.log('erro ao listar usuários: ',error));
};



const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
}

const editValidarCadastro = () => {
    let id = parseInt(document.getElementById('id-oculto').innerText);
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        editarUsuario(idEditarAtual);
    }
}


const excluirColaborador = (id) => {
    console.log('chamado o excluir colaborador', id)
    axios.delete(`http://localhost:3000/colaboradores/${id}`)
    .then((response)=> console.log('colaborador excluido com sucesso',response))
    .catch((error)=> console.log('erro ao excluir colaborador',error));
}

const editarUsuario = (id) => {
    let nomeInput = document.getElementById('edit-name-input-registration');
    let dataInput = document.getElementById('edit-date-input-registration');
    let emailInput = document.getElementById('edit-email-input-registration');
    let senhaInput = document.getElementById('edit-password-input-registration');
    
    let colaborador = new Colaborador(nomeInput.value,dataInput.value,emailInput.value,senhaInput.value);

    axios.put(`http://localhost:3000/colaboradores/${id}`,colaborador)
    .then(response => console.log('colaborador editado com sucesso',response))
    .catch(error => console.log('erro ao editar colaborador: ', error));
}

const cadastrarUsuario = () => {
    let nomeInput = document.getElementById('name-input-registration');
    let dataInput = document.getElementById('date-input-registration');
    let emailInput = document.getElementById('email-input-registration');
    let senhaInput = document.getElementById('password-input-registration');

    // aqui entra lógica de POST para salvar usuário

    let colaborador = new Colaborador(nomeInput.value,dataInput.value,emailInput.value,senhaInput.value);

    // Endpoint
    axios.post('http://localhost:3000/colaboradores', colaborador)
        .then((response) => {
            console.log('Colaborador cadastrado => ', response.data);
            resetarCampos(nomeInput,dataInput, emailInput, senhaInput);
            irPara('registration', 'login');
        })
        .catch((error) => {
            console.log('Erro => ', error);
        });
};
