import React from 'react'
import * as S from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'

function SignUp(){

    let userData = {
        "user": {
        "name": ``,
        "email": ``,
        "password": ``,
        "phoneNumbers": [ ]
        },
        "company": {
        "type": "",
        "document": "",
        "tradingName": "",
        "name": "",
        "email": "",
        "phoneNumbers": [ ],
        "address": {},
        "bankAccount": {}
        }
    }

    //Post dos dados obtidos
    async function handleSubmit(event){
        event.preventDefault()
        await api.post('/signup', userData)
        .then(response =>{
            alert("Conta criada com sucesso!")
            window.location.href = '/signin'
        })
        .catch(error =>{
            alert("Problema ao criar conta, tente novamente!")
        }
        )

    }

return(
    <S.Container>
        <img src={logo} alt='logo' />

        {/* Atualizar valor das variáveis */}
        <form onSubmit={handleSubmit}>
        
        <input onChange={ e => userData.user.name = `${e.target.value}`} id="email" 
        type="text" placeholder="Nome Completo" required/>

        <input onChange={ e => userData.user.email = `${e.target.value}`} id="email" 
        type="text" placeholder="E-mail" required/>

        <input onChange={ e => userData.user.phoneNumbers = `"${e.target.value}"`} id="email" 
        type="text" placeholder="Telefone (Opcional)" />

        <input onChange={ e => userData.user.password = `${e.target.value}`} id="password" 
        type="password" placeholder="Senha" required/>

            <button>Entrar</button>
            </form>
    </S.Container>
)



}


export default SignUp