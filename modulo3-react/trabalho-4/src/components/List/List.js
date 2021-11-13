import Usuario from "../Usuario/Usuario";
import styles from './List.module.css';
import {AiFillEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';


function List({users, setUsers, setValoresIniciais, emEdicao, setEmEdicao, valoresPadrao}){
  const excluir = id => {
    
    if(emEdicao.status && emEdicao.id===id){
      setEmEdicao({status:false,id:0})
      setValoresIniciais(valoresPadrao)
    }
    setUsers(users.filter(user => user.id !== id));
  }

  const ordenaArray = ()=>{
    return [...users].sort((a,b) => a.id - b.id);
  }
  const editar = (id,usuario) => {
   
    setEmEdicao({status: true, id: id})
    setValoresIniciais({
      firstName: usuario.firstName,
      lastName: usuario.lastName,
      email: usuario.email,
      address: usuario.address,
      phone: usuario.phone
    });
  }
  

  return (
    <div className={styles.divLista}>
      <div className={styles.titulo}>
        <span>Usuários</span>
      </div>
      <div className={!emEdicao.status ? styles.lista : styles.listaOpaca}>
    {!users.length ? (<p className={styles.listaVazia}>Não há usuários cadastrados</p>) : null}
    {emEdicao.status ? (<p className={styles.listaVazia}>Usuário {emEdicao.id} sendo editado na outra tela</p>):null}
    {ordenaArray(users).map(u => (
      <div className={styles.usuario} key={u.id}>
        <div className={styles.divBotoes}>
        <span>Usuário {u.id}</span>
        <span id={`editar-${u.id}`} onClick={()=> editar(u.id,u)} disabled={emEdicao.status ? 'disabled' : ''}><AiFillEdit/></span>
        <span id={`excluir-${u.id}`} onClick={()=> excluir(u.id)}><AiFillDelete/></span>
        </div>
        <Usuario info={u} />
      </div>
    ))}
    </div>
    </div>
  );
}

export default List;