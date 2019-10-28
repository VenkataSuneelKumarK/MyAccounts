/**
 * Created by kanamars on 21/10/19.
 */
import React from 'react';
import MyTransactions from './Containers/MyTransactions/MyTransactions';
import TransactionDetails from './Containers/TransactionDetails/TransactionDetails';
import Layout from "./HOC/Layout/Layout";
import {Route, Switch} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Layout>
                    <Switch>
                        <Route path='/transdetails' component={TransactionDetails}/>
                        <Route path='/' exact component={MyTransactions}/>
                    </Switch>
                </Layout>
            </React.Fragment>
        )
    }
}

export default App;