import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    color: #893DCC;
    margin-bottom: 50px;

    .collMenu{
        width: 400px;
        height: 30px;
        margin-top: 20px;
        color: #893DCC;
        font-size: 18px;
        border: 3px solid #893DCC;
        border-radius: 10px;
    }
    
    #insertPassword{
        color: #893DCC;
        font-size: 18px;
        margin-top: 20px;
    }

    #submit{
        width: 30px;
        height: 30px;
        margin-top: 15px;
        margin-left: 360px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

    /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
    }


`

export const Password = styled.div`
    width: 400px;
    display: flex;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom: 10px;

    input{
        width: 340px;
        height: 40px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        margin-right: 10px; 
        margin-top: 5px;
    }
    img{
        width: 30px;
        height: 30px;
    }
`
export const Prices = styled.div`
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;

input{
    width: 390px;
    height: 40px;
    border: 3px solid rgba(52, 69, 255, 0.76);
    border-radius: 10px;
    margin-bottom: 5px;
}
`

export const CustomerData = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
   

`
export const PersonalData = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;

    input{
        width: 390px;
        height: 40px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        margin-bottom: 5px;
    }

    #typeCustomer{
        width: 400px;
        height: 50px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        margin-bottom: 5px;
    }

`
export const Address = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;

    input{
        height: 40px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }

    #street{
        margin-left: 0px;
        width: 350px;
    }

    #number{
        margin-left: 5px;
        margin-right: 0px;
        width: 45px;
    }

`
export const Complement = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;

    input{
        width: 400px;
        height: 40px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }
    

`
export const City = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;
    input{
        width: 100%;
        height: 35px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }
    #city{
        width: 190px;
        height: 50px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
    }
    #uf{
        margin-left: 5px;
        height: 50px;
        width: 95px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
    }
    #postalCode{
        margin-left: 5px;
        width: 90px;
        height: 40px;
        margin-top: 0px;
    }

`
export const Boleto = styled.div`
width: 400px;
display: flex;
flex-direction: center;
align-items: center;
align-content: center;
justify-content: center;
input{
    width: 400px;
    height: 40px;
    border: 3px solid rgba(52, 69, 255, 0.76);
    border-radius: 10px;
    padding-left: 5px;
    margin: 5px 0px;
}
img{
    width: 30px;
    height: 30px;
    margin-left: 370px;
}
`
export const Cartao = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    input{
        width: 400px;
        height: 40px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }
    img{
        width: 30px;
        height: 30px;
        margin-left: 370px;
    }

    #cardFlag{
        width: 410px;
        height: 45px;
        border: 3px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }

`