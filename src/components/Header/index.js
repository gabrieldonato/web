import React from 'react'
import * as S from './styles'
import logo from '../../assets/logo.png'

function Header() {
    return(
        <S.Container>
            <img src={logo} alt="Logo"
            onClick={() => window.location.href = "/dash"}/>
        </S.Container>
    )
}

export default Header