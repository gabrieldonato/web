import React, { useEffect } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api'
import avatar from '../../assets/avatar.png'
import {Link} from 'react-router-dom'


function Dash() {
    //Variável para obter nome do usuário
    let userData = {}
    //Configuração do Bearer Token com localStorage
    const config = {
        headers: { "Authorization": `bearer ${localStorage.getItem('token')}` }
    }

    //Validação se o usuário já se autenticou
    function validation(){
        if(localStorage.getItem('token') === null || localStorage.getItem('token') === "undefined"){
            window.location.href = "/home"
        }
    }

    async function loadUserData(){
        
        //Resgatar dados do usuário e renderizar nome no Bem Vindo
        await api.get(`/user/${localStorage.getItem("_id")}`, config)
        .then(response =>{
            userData = JSON.parse(`${response.request.response}`)
            document.getElementById("userName").innerHTML = `${userData.name}!`
        })
    }
    
    useEffect(() =>{
        loadUserData()
        validation()
    })

    return(
        <S.Container>
        <Header />
        <S.User>
            <div>
            <img src={avatar} alt="Avatar" />
            </div>
            <h1>Bem Vindo,</h1><h1 id="userName">  </h1>
        </S.User>
        <S.Options>
            <Link to="/transactions"><button>REALIZAR TRANSAÇÕES</button></Link>
            <Link to="/companycreate"><button>CRIAR EMPRESA</button></Link>
        </S.Options>
            
        <Footer />
        </S.Container>
    )
}

export default Dash