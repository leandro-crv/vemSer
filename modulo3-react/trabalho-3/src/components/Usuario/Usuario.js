import styles from './Usuario.module.css'
function Usuario({info}){
  return(
    <div className={styles.usuarioInfo}>
      <div><span className='label'>Primeiro nome:</span>{info.firstName}</div>
      <div><span className='label'>Último nome:</span>{info.lastName}</div>
      <div><span className='label'>Email:</span>{info.email}</div>
      <div><span className='label'>Endereço:</span>{info.address}</div>
      <div><span className='label'>Telefone:</span>{info.phone}</div>
    </div>
  )
}

export default Usuario;