import api from "../../api";
import axios from "axios";

export const getPessoas = async () =>{
  const {data} = await axios.get('https://my-application-teste.herokuapp.com/pessoa');
  console.log("data no getPessoa",data)
}