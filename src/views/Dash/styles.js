import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;


`

export const User = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-left: 50px;
    color: #893DCC;

    h1{
        margin-left: 30px;
        margin-top: 10px;
        font-size: 45px;
    }
    
    div{   
        width:  200px;
        height: 200px;
        border: 1px solid #707070;
    }

    img{
        width: 80%;
        margin-bottom: 0px;
        margin-top: 20%;

    }

    #userName{
        margin-left: 5px;
    }
`

export const Options = styled.div`
    width: 100%;
    margin: -40px;
    margin-left: -300px;

    button{
        color: #FFFFFF;
        background: #893DCC;
        font-weight: bold;
        width: 200px;
        height: 50px;
        margin: 0px 10px;
        border: none;
        border-radius: 10px;
    }
    
`