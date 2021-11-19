import { useEffect, useState } from "react";
import api from "../api";


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    (async()=>{
      const {data} = await api.get('/users');
      console.log('data é:',data)
     setUsers(data);
  })();
  },[]);

  return(
    <>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name} <a href={user.website}>{user.website}</a></li>
      )
      )}
    </ul>
    <button>Sair</button>
    </>
  )
}

export default Users;