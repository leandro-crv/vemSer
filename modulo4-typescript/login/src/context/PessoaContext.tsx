import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { PessoaDTO } from "../model/PessoaDTO";
import api from "../api";
import { useNavigate } from "react-router";
import { EnderecoDTO } from "../model/EnderecoDTO";



const PessoaContext = createContext({});
const PessoaProvider: React.FC<ReactNode> = ({children}) =>{
  const navigate = useNavigate();
  const [listPessoas, setListPessoas] = useState<PessoaDTO>();
  const [edit, setEdit] = useState<boolean>(false);
  const [idEdit, setIdEdit] = useState<number>(0);
  const initialValues:PessoaDTO = {
    cpf:'',
    dataNascimento:'',
    email:'',
    nome:''
  }
  
  const [infoPessoa, setInfoPessoa] = useState<PessoaDTO>(initialValues)

  useEffect(()=>{
    if(edit){
      navigate('/cadastro')
    }
  },[edit])

  // GET

  const getPessoas = async()=>{
    const {data} = await api.get('pessoa');
    setListPessoas(data.sort((a:any, b:any) => a.idPessoa > b.idPessoa ? 1 : -1));
  }
  
  // CRIAR (pessoa e endereço)

  const postPessoa = async (pessoa: PessoaDTO) =>{
    const {data} = await api.post('pessoa',pessoa);
    navigate('/pessoa');
  }

  const postEndereco = async (endereco: EnderecoDTO, id: number) =>{
    endereco.cep = endereco.cep.replaceAll(new RegExp(/[_-]/,'g'),'');
    const {data} = await api.post(`endereco/${id}`, endereco);
    console.log('post de endereço: ', data);
  }

  // EXCLUIR

  const deletePessoa = async(id:number) =>{
    const {data} = await api.delete(`pessoa/${id}`);
    getPessoas();
  }

  // EDITAR

  const prepareEdition = (pessoa:PessoaDTO) =>{
    setEdit(true);
    setIdEdit(Number(pessoa.idPessoa));
    setInfoPessoa(pessoa);
  }

  const cancelEdit = ()=>{
    setEdit(false);
    setIdEdit(0);
    setInfoPessoa(initialValues);
    navigate('/pessoa')
  }
  
  const putPessoa = async (pessoa:PessoaDTO)=>{
    const {data} = await api.put(`/pessoa/${idEdit}`,pessoa);
    setIdEdit(0);
    setInfoPessoa(initialValues);
    setEdit(false);
    navigate('/pessoa');
  }

  return(
    <PessoaContext.Provider 
      value={{
        listPessoas,
        getPessoas,
        postPessoa,
        deletePessoa,
        edit,
        setEdit,
        infoPessoa,
        setInfoPessoa,
        cancelEdit,
        prepareEdition,
        putPessoa,
        postEndereco
      }}
    >
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext, PessoaProvider}