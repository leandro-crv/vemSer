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

    