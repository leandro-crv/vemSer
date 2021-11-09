const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
}

const irPara = (origem, destino) => {
    let elementoOrigem = document.getElementById(origem);
    let elementoDestino = document.getElementById(destino);

    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
}


const validarLogin = () => {
    let emailInput = document.getElementById('email-input-login');
    let senhaInput = document.getElementById('password-input-login');

    axios.get('http://localhost:3000/colaboradores')
        .then(response => {            
            let listaColaboradores = response.data;

            for(colaborador of listaColaboradores) {
                let liCriada = document.createElement('li');

                liCriada.id = `list-item-${colaborador.id}`;                
            }
        });
}


const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
}


const cadastrarUsuario = () => {
    let dataInput = document.getElementById('date-input-registration');
    let emailInput = document.getElementById('email-input-registration');
    let senhaInput = document.getElementById('password-input-registration');

    // aqui entra lógica de POST para salvar usuário

    let colaborador = { 
        email: emailInput.value,
        senha: senhaInput.value,
        dataNascimento: dataInput.value
    }

    // Endpoint
    axios.post('http://localhost:3000/colaboradores', colaborador)
        .then( () => {
            resetarCampos(dataInput, emailInput, senhaInput);
            irPara('registration', 'login');
        })
        .catch((retornoDoErroDaPromise) => {
            console.log('Erro da promise => ', retornoDoErroDaPromise);
        });        
};
