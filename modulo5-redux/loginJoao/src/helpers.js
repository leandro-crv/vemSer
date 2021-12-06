import { api } from "./api";
export const removeMaskCpf = (cpf) =>{
  return cpf.replaceAll(new RegExp(/[\.\-_]/,'g'),'');
}

export const addMaskCpf = (cpf) => {
  return cpf.substr(0,3) + '.' + cpf.substr(3,3) + '.' + cpf.substr(6,3) + '-' + cpf.substr(9,2)
}

export const removeMaskCep = (cep)=>{
  return cep.replaceAll(new RegExp(/[\_\-]/,'g'),'');
}

export const isLogin = ()=>{
  const token = localStorage.getItem('token');
  if(token){
    api.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    return true
  }
  else{
    return false
  }
}