import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    color: #893DCC;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

/* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
}
    
    .collMenu{
        width: 400px;
        border: 2px solid #893DCC;
        border-radius: 10px;
        padding: 10px 0px;
        margin: 10px;

    }
`

export const PersonalArea = styled.div`
    width: 100%;
    color: #893DCC;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    h1{
        font-weight: bold;
    }

    input{
        height: 40px;
        border-color: rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }
    .default{
        width: 400px;
    }

    select{
        height: 45px;
        background: #FFFFFF;
        border: 2px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
        width: 410px;
    }

    #phoneNumbers{
        width: 400px;
    }


`

export const Address = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;

    input{
        width: 100%;
        height: 40px;
        border-color: rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }

    #street{
        margin-left: -4px;
        width: 350px;
    }

    #number{
        margin-left: 5px;
        margin-right: -4px;
        width: 45px;
    }

`

export const Complement = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;

    input{
        width: 100%;
        height: 40px;
        border-color: rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }

    #complement{
        margin-left: -4px;
        width: 250px;
    }

    #neighborhood{
        margin-left: 5px;
        margin-right: -4px;
        width: 140px;
    }

`

export const City = styled.div`
    width: 400px;
    display: flex;
    flex-direction: center;
    input{
        width: 100%;
        height: 40px;
        border-color: rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }
    #city{
        margin-left: -4px;
        width: 200px;
    }
    #uf{
        margin-left: 5px;
        width: 95px;
    }
    #postalcode{
        margin-left: 5px;
        margin-right: -4px;
        width: 90px;
    }

`
export const BankArea = styled.div`
    width: 400px;
    padding: 5px 30px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    input{
        height: 40px;
        border-color: rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
    }

    select{
        height: 45px;
        background: #FFFFFF;
        border: 2px solid rgba(52, 69, 255, 0.76);
        border-radius: 10px;
        padding-left: 5px;
        margin: 5px 0px;
        width: 410px;
    }

` 
export const DataBank = styled.div`
    width: 100%;
    display: flex;
    flex-direction: center;

    #agency{
        width: 100px;
        margin-left: -5px;
    }

    #account{
        width: 195px;
        margin-left: 5px;
    }

    #digit{
        width: 95px;
        margin-left: 5px;
        margin-right: -5px;
    }

` 

export const Next = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
img{
    width: 40px;
    height: 40px;
    margin-left: 360px;
}
    button{
        background: transparent;
        border: none;
        width: 40px;
        height: 40px;
        margin-right: 360px;
    }

`