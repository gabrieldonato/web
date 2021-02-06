import React from 'react'
import * as S from './styles'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <S.Container>
            <img src={logo} alt="logo" />
            <Link to="/signup"><button>Cadastre-se</button></Link>
            <Link to="signin"><button>Login</button></Link>
        </S.Container>
    )
}

export default Home