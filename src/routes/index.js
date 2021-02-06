import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../views/Home'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Dash from '../views/Dash'
import CompanyCreate from '../views/CompanyCreate'
import Transactions from '../views/Transactions'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dash" component={Dash} />
                <Route path="/companycreate" component={CompanyCreate} />
                <Route path="/transactions" component={Transactions} />
            </Switch>
        </BrowserRouter>
    )
}