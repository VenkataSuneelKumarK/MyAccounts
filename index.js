/**
 * Created by kanamars on 21/10/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './app/app';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import transReducer from './app/Store/Reducers/transactions';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    transaction: transReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class Trans extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                     <App/>
                </BrowserRouter>
            </Provider>
        )
    }
}


ReactDOM.render(<Trans/>, document.getElementById("root"));