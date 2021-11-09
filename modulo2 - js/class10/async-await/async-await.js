let listaColaboradores = [];

// funções assíncronas
// async await
// bloco de execução try catch

const buscaColaboradores = async () => {
    try {
        let response = await axios.get('http://localhost:3000/colaboradores');
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }    

    // console.log('Pronto, aqui estão os colaboradores => ', listaColaboradores);
}


buscaColaboradores();



const funcaoBotaoRecebendoParametros = (param1, param2, ...restoParametros) => {
    console.log('param1 => ', param1);
    console.log('param2 => ', param2);
    console.log('restoParametros => ', restoParametros);
}


let botao = document.getElementById('btn');

botao.addEventListener('click', 
    () => funcaoBotaoRecebendoParametros('Primeiro Parâmetro', 2, 'abc', [ 1, 2, 3 ], 'Oii')
);
