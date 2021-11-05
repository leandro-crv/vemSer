/*
    Seguindo com a implementação do nosso sistema de cadastro de colaboradores...

    Criem as classes e modelos de objeto separados numa pasta "model" contendo os arquivos lá dentro como por exemplo: "colaborador.js"

    class Colaborador {
        id; (setado automático pelo json-server)
        nome;
        dataNascimento;
        email;
        senha;
    }

    Necessitamos agora das seguintes funcionalidades:

    - Adicionar a propriedade "Nome" no colaborador e ajustar a tela de cadastro para ter o nome também, validando somente se o nome não possui números ou caracteres especiais e lembrando de salvar no modelo Title-Case, ex: Tiago Silva Schmidt;

    - Precisamos também poder excluir/remover um colaborador, então precisamos também de um botão de Excluir para cada colaborador;
    
    - Para cada colaborador listado na tela inicial (<li>) precisamos ter também um botão de Editar, para poder editar as informações do colaborador (isso irá "redirecionar" para um formulário de Edição de Cadastro com os campos já preenchidos com os dados do colaborador);
*/


// Tarefas a fazer
// verificar data - undefined
// limpar campos ao ir para próxima página
// formatar layout