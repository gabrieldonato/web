import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-pagarapido.aquisi.dev.br', 
    headers: {'Content-Type': 'application/json'}
})

export default api