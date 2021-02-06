import styled from 'styled-components'

export const Container = styled.div`
background: rgba(52, 69, 225, 0.76);
padding-bottom: 20%;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 500px;
    height: 200px;
    margin-top: 50px;    
}

input{
    width: 350px;
    height: 40px;
    color: #707070;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
}

button{
    color: #3445E1;
    background: #FFFFFF;
    font-weight: bold;
    width: 200px;
    height: 50px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
}

#email{
    margin-top: 100px;
}

#password{
    margin-top: 20px;
}

`