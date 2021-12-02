import axios from 'axios'

const api = axios.create({
  baseURL: 'https://my-application-teste.herokuapp.com/'
});

export default api