import React, { useState } from 'react'
import * as S from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'


function SignIn(){

    //State para resgatar dados para o localStorage
    const [data, setData] = useState()
    let login = {
        "email": ``,
        "password": ``
    }

    async function handleLogin(event){
        event.preventDefault()
        await api.post("/signin", login)
        .then(response =>{
            //Parse para armazenar dados no localStorage
            setData(JSON.parse(`${response.request.response}`))
            localStorage.setItem('email', data.email)
            localStorage.setItem('token', data.token)
            localStorage.setItem('_id', data._id)
            //Teste para verificar se há empresas cadastradas
            //Se houver, direcionar para dashboard
            //Se não houver, direcionar para criar uma nova
            if(data.companies[0] !== "null"){
                window.location.href = "/dash"
            }else{
                window.location.href = "/companycreate"
            }            
        })
        .catch(error =>{
            alert("Impossível se conectar, tente novamente!")
    })
}

    return(
        <S.Container>
            <img src={logo} alt='logo' />
            <form onSubmit={handleLogin}>

            <input onChange={ e => login.email = `${e.target.value}`} id="email" 
            type="text" placeholder="Login" required/>

            <input onChange={ e => login.password = `${e.target.value}`} id="password" 
            type="password" placeholder="Senha" required/>

            <button>Entrar</button>
            </form>
        </S.Container>

    )
}

export default SignIn