import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Collapsible from 'react-collapsible'
import Footer from '../../components/Footer'
import nextIcon from '../../assets/next.png'
import api from '../../services/api'


function CompanyCreate(){

    //State para buscas na API
    const [bank, setBank] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    
    //Criação dos dados para envio da requisição
    let accountData = {
    "type": `private`,
    "document": `46645341830`,
    "name": `Gabriel Lins Donato`,
    "email": `${localStorage.getItem('email')}`,
    "phoneNumbers": [],
    "address": {
        "street": `Praça Epitácio Pessoa`,
        "number": `03`,
        "complement": `Centro`,
        "neighborhood": `Centro`,
        "state": `SP`,
        "city": `Pedreira`,
        "postalCode": `13920000`
},
    "bankAccount": {
        "type": `currentAccount`,
        "bank": `033`,
        "agency": `0298`,
        "account": `01021857`,
        "accountDigit": `9`
}
}
    //Carregar Bancos e Estados ao iniciar
    useEffect(()=>{
        loadBanks()
        loadStates()    
    },[])


    //Carregar Bancos
    async function loadBanks() {
        await api.get(`/bank`)
        .then(response => {
            setBank(response.data)
        }) 
    }

    //Carregar Estados
    async function loadStates(){
        await api.get(`/geo/states`)
        .then(response =>{
            setStates(response.data)
        })
    }

    //Carregar Cidades
    async function loadCities(){
        await api.get(`/geo/states/${accountData.address.state}/cities`)
        .then(response =>{
            setCities(response.data)
        })
    }

    //Envio da requisição
    async function submitAccount(){
        //Bearer Token configurado com localStorage
        const config = {
            headers: { "Authorization": `bearer ${localStorage.getItem('token')}` }
        };
        //Criação da Empresa na API
        await api.post("/company", accountData, config)
        .then(response =>{
            alert("Empresa cadastrada com sucesso!")
            window.location.href = "/dash"
        })
        .catch(error =>{
            alert("Confira os dados e tente novamente!")
        })
    }
    
    //Atualizar cidades com base no estado
    function handleSelectedState(event){
        accountData.address.state = `${event.target.value}`
        loadCities()
        let insert = document.getElementById('insertCities')
        insert.innerHTML = cities.map(c => (
            <option value={c._id}>{c.name}</option>
            ))
    }

    return(
        <S.Container>
            <Header />
                <h1>CRIAÇÃO DE EMPRESA</h1>
            <Collapsible className="collMenu" trigger="Dados Pessoais">
            <S.PersonalArea>

                {/* Atualizar variável com dados inseridos */}
                {/* Dados Pessoais */}
                <input className="default" type="text" 
                placeholder="Nome / Razão Social" required
                onChange={e => {accountData.name = `${e.target.value}`}}
                />
                <input className="default" type="text" 
                placeholder="CPF / CNPJ" required
                onChange={e => {accountData.document = `${e.target.value}`}}
                />
                <input id="phoneNumbers" type="number"
                placeholder="(99) 99999-9999"
                onChange={e => {accountData.phoneNumbers = `${e.target.value}`}}
                />
                <select id="typeCompany" className="typeCompany" 
                onChange={e => {accountData.type = `${e.target.value}`}}
                >
                <option selected value="private">Pessoa Física</option>
                <option value="legal">Pessoa Jurídica</option>
                </select>
                
                {/* Obter Endereço */}
                <S.Address>
                    <input id="street" type="text" 
                    placeholder="Endereço" required
                    onChange={e => {accountData.address.street = `${e.target.value}`}}
                    />
                    <input id="number" type="number" 
                    placeholder="N°" required
                    onChange={e => {accountData.address.number = `${e.target.value}`}}
                    />
                </S.Address>
                <S.Complement>
                    <input id="complement" type="text" 
                    placeholder="Complemento" required
                    onChange={e => {accountData.address.complement = `${e.target.value}`}}
                    />
                    <input id="neighborhood" type="text" 
                    placeholder="Bairro" required
                    onChange={e => {accountData.address.neighborhood = `${e.target.value}`}}
                    />
                </S.Complement>
                <S.City>
                    {/* BUSCA POR CIDADES */}
                    <select id="city" name="city" 
                    onChange={e => { 
                        accountData.address.city = `${e.target.value}`
                    }}>
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
                    onLoad={e => { accountData.address.state = `${e.target.value}`}}
                    onChange={handleSelectedState}>
                    <option selected value="">UF</option>
                    {
                    states.map(s => (
                    <option value={s._id}>{s.name}</option>
                    ))
                    }
                    </select>
                    <input id="postalcode" type="number" 
                    placeholder="CEP" required
                    onChange={e => {accountData.address.postalCode = `${e.target.value}`}}
                    />
                </S.City>
            </S.PersonalArea>
            </Collapsible>
            <Collapsible className="collMenu" trigger="Dados Bancários">
            <S.BankArea>
                {/* Busca por Bancos */}
                <select id="bank" name="bank" 
                onLoad={e => { accountData.bankAccount.bank = `${e.target.value}`}}
                onChange={e => { accountData.bankAccount.bank = `${e.target.value}`}}>
                <option selected value="">ESCOLHA SEU BANCO</option>
                    {
                    bank.map(b => (
                    <option value={b._id}>{b.name}</option>
                    ))}
                </select>
                
                {/* Obter dados Bancários */}
                <S.DataBank>
                    <input id="agency" type="number" 
                    placeholder="Agência" required 
                    onChange={e => {accountData.bankAccount.agency = `${e.target.value}`}}
                    />
                    <input id="account" type="number" 
                    placeholder="Conta" required 
                    onChange={e => {accountData.bankAccount.account = `${e.target.value}`}}
                    />
                    <input id="digit" type="number" 
                    placeholder="Dígito" required 
                    onChange={e => {accountData.bankAccount.accountDigit = `${e.target.value}`}}
                    />
                </S.DataBank>
                <select id="typeAccount" name="typeAccount" 
                onChange={e => {accountData.bankAccount.type = `${e.target.value}`}}
                >
                <option selected value="currentAccount">Conta Corrente</option>
                <option value="savings">Conta Poupança</option>
                </select>
            </S.BankArea>
            </Collapsible>
                <S.Next>
                <a onClick={submitAccount}>
                <img src={nextIcon} alt="next" />
                </a>
                </S.Next>
            <Footer style={`padding-top: 100px;`}/>
        </S.Container>
    )
}

export default CompanyCreate