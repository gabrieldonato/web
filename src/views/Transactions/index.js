import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Collapsible from 'react-collapsible'
import api from '../../services/api'
import next from "../../assets/next.png"
import * as S from './styles'

function Transactions(){
    
    //State para obter Estado/Cidade
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    //Variável para envio da Transação
    let transaction = {
        "gatewayKey": "8353b77a-0d11-4a81-8b34-ac334bed7287",
        "returnUrl": ``,
        "foreignOrderId": ``,
        "amount": 1.00,
        "installments": 1,
        "cardNumber": ``,
        "cardCvv": ``,
        "cardExpirationDate": ``,
        "cardHolderName": ``,
        "cardFlag": ``,
        "paymentType": "credit_card",
        "customer": {
        "name": ``,
        "document": ``,
        "type": "private",
        "email": ``,
        "phoneNumbers": [ ],
        "addresses": {
                "street": "",
                "number": "",
                "neighborhood": "",
                "city": "",
                "postalCode": "",
                "state": ""}
        },
        "items": [],
        "boletos": []
    }

    //Configuração do Bearer Token com localStorage
    const config = {
        headers: { "Authorization": `bearer ${localStorage.getItem('token')}` }
    }
    
    //Validar autenticação e carregar Estados
    useEffect(()=>{
        validation()
        loadStates()
    },[])

    //Carregar Estados
    async function loadStates(){
        await api.get(`/geo/states`)
        .then(response =>{
            setStates(response.data)
        })
    }

    //Carregar Cidades
    async function loadCities(){
        await api.get(`/geo/states/${transaction.customer.addresses.state}/cities`)
        .then(response =>{
            setCities(response.data)
        })
        .catch(error =>{    
            console.log(error)
        })
    }

    //Atualizar cidades com base no estado
    function handleSelectedState(event){
        transaction.customer.addresses.state = document.getElementById("uf").value
        loadCities()
        let insert = document.getElementById('insertCities')
        insert.innerHTML = cities.map(c => (
            <option value={c._id}>{c.name}</option>
            ))
    }

    //Validar se o usuário já se autenticou
    function validation(){
        if(localStorage.getItem('token') === null || localStorage.getItem('token') === "undefined"){
            window.location.href = "/"
        }
    }

    async function submitBoleto(){
        //RETIRAR DADOS CONVERGENTES DO BOLETO E ENVIAR REQUISIÇÃO
        transaction.boletos = {
            "amount": document.getElementById("amountBoleto").value,
            "dueDate": document.getElementById("dueDateBoleto").value,
            "installment": document.getElementById("installmentBoleto").value
        }
        transaction.paymentType = "boleto"
        transaction.amount = 0
        transaction.installments = 1
        transaction.foreignOrderId = document.getElementById("foreignOrderId").value
        transaction.cardNumber = ""
        transaction.cardCvv = ""
        transaction.cardExpirationDate = ""
        transaction.cardHolderName = ""
        transaction.cardFlag = ""
        transaction.customer.name = document.getElementById("nameCustomer").value
        transaction.customer.email = document.getElementById("emailCustomer").value
        transaction.customer.document = document.getElementById("documentCustomer").value
        transaction.customer.phoneNumbers = document.getElementById("phoneNumbersCustomer").value
        transaction.customer.type = document.getElementById("typeCustomer").value
        transaction.customer.addresses.street = document.getElementById("street").value
        transaction.customer.addresses.number = document.getElementById("number").value
        transaction.customer.addresses.neighborhood = document.getElementById("neighborhood").value
        transaction.customer.addresses.city = document.getElementById("city").value
        transaction.customer.addresses.state = document.getElementById("uf").value
        transaction.customer.addresses.postalCode = document.getElementById("postalCode").value
        
        //Post Transação
        await api.post("/transaction", transaction)
        .then(response =>{
            alert("Cadastro realizado!")
        })
        .catch(error =>{
            alert("Erro, tente novamente!")
        })
    }

    async function submitCartao(){

        //RETIRAR DADOS CONVERGENTES DO CARTÃO E ENVIAR REQUISIÇÃO
        transaction.boletos = []
        transaction.paymentType = "credit_card"
        transaction.amount = document.getElementById("amount").value
        transaction.installments = document.getElementById("installments").value
        transaction.foreignOrderId = document.getElementById("foreignOrderId").value
        transaction.cardNumber = document.getElementById("cardNumber").value
        transaction.cardCvv = document.getElementById("cardCvv").value
        transaction.cardExpirationDate = document.getElementById("cardExpirationDate").value
        transaction.cardHolderName = document.getElementById("cardHolderName").value
        transaction.cardFlag = document.getElementById("cardFlag").value
        transaction.customer.name = document.getElementById("nameCustomer").value
        transaction.customer.email = document.getElementById("emailCustomer").value
        transaction.customer.document = document.getElementById("documentCustomer").value
        transaction.customer.phoneNumbers = document.getElementById("phoneNumbersCustomer").value
        transaction.customer.type = document.getElementById("typeCustomer").value
        transaction.customer.addresses.street = document.getElementById("street").value
        transaction.customer.addresses.number = document.getElementById("number").value
        transaction.customer.addresses.neighborhood = document.getElementById("neighborhood").value
        transaction.customer.addresses.city = document.getElementById("city").value
        transaction.customer.addresses.state = document.getElementById("uf").value
        transaction.customer.addresses.postalCode = document.getElementById("postalCode").value
        
        //Post Transação
        await api.post("/transaction", transaction)
        .then(response =>{
            alert("Cadastro realizado!")
        })
        .catch(error =>{
            alert("Erro, tente novamente!")
        })

    }

    return(
        <S.Container>
            <Header />
            <h1>Cadastrar Transação</h1>
            {/* Inserir Dados */}
            {/* Variáveis serão atualizadas no submit */}
            <S.Prices>
                {/* Detalhes */}
                <input id="amount" type="number" placeholder="Valor (Ex: 150.00)"/>
                <input id="installments" type="number" placeholder="Parcelas (Ex: 2)"/>
                <input id="foreignOrderId" type="text" placeholder="Descrição"/>
            </S.Prices>
            <S.CustomerData>
            <Collapsible className="collMenu" trigger="Cliente">
            <S.PersonalData>
                {/* Dados do Cliente */}
            <input className="default" type="text" 
            placeholder="Nome" required
            id="nameCustomer"
            />
            <input className="default" type="text" 
            placeholder="CPF ou RG" required
            id="documentCustomer"
            />
            <input id="emailCustomer" type="text"
            placeholder="E-mail"
            id="emailCustomer"
            />
            <input type="number"
            placeholder="(99) 99999-9999"
            id="phoneNumbersCustomer"
            />
            {/* Tipo de Cliente */}
            <select id="typeCustomer" className="typeCustomer">
            <option selected value="none">Selecione o Tipo</option>
            <option value="private">Pessoa Física</option>
            <option value="legal">Pessoa Jurídica</option>
            </select>
            </S.PersonalData>
            <S.Address>
                {/* Endereço do Cliente */}
                <input id="street" type="text" 
                placeholder="Endereço" required
                />
                <input id="number" type="number" 
                placeholder="N°" required
                />
            </S.Address>
            <S.Complement>
                    <input id="neighborhood" type="text" 
                    placeholder="Bairro" required
                    />
                </S.Complement>
                <S.City>
                    {/* BUSCA POR CIDADES */}
                    <select id="city" name="city">
                    <option selected value="">Cidade</option>
                    <div id="insertCities">

                    </div>
                    {
                    cities.map(c => (
                    <option value={c._id}>{c.name}</option>
                    ))
                    }
                    </select>
                    {/* BUSCA POR ESTADOS */}
                    <select id="uf" name="uf"
                    onChange={handleSelectedState}>
                    <option selected value="">UF</option>
                    {
                    states.map(s => (
                    <option value={s._id}>{s.name}</option>
                    ))
                    }
                    </select>
                    <input id="postalCode" type="number" 
                    placeholder="CEP" required/>
                </S.City>
                </Collapsible>
            </S.CustomerData>
            <Footer />
            <S.Boleto>
                {/* Dados do Boleto */}
            <Collapsible className="collMenu" trigger="Boleto">
            <input id="amountBoleto" type="number" 
            placeholder="Valor (Ex: 150.00)" required
            />
            <input id="installmentBoleto" type="text" 
            placeholder="Parcelas (Ex: 2)" required
            />
            <input id="dueDateBoleto" type="text" 
            placeholder="Data de Vencimento (Ex: 2021-12-31T23:59:00.000Z)" required
            /> 
            <img src={next} alt="setBoleto" onClick={submitBoleto}/>
            </Collapsible>
            </S.Boleto>
            <S.Cartao>
            <Collapsible className="collMenu" trigger="Cartão de Crédito">
                {/* Dados do Cartão */}
            <input id="cardNumber" type="number" 
            placeholder="Número do Cartão" required
            />
            <input id="cardHolderName" type="text" 
            placeholder="Nome do Cartão" required
            />
            <input id="cardExpirationDate" type="number" 
            placeholder="Data de expiração (apenas números)" required
            />
            <input id="cardCvv" type="number" 
            placeholder="CVV" required
            />
            <select id="cardFlag" className="cardFlag">
            <option selected value="visa">Selecione a Bandeira</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">Amex</option>
            <option value="elo">Elo</option>
            <option value="hipercard">Hipercard</option>
            </select>
            {/* Enviar Dados */}
            <img src={next} id="clearBoleto" onClick={submitCartao}/>
            </Collapsible>
            </S.Cartao>
            
        </S.Container>
    )

}


export default Transactions