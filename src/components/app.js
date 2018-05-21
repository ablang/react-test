import React from 'react'
import store from '../store'
import {Provider} from 'react-redux'
import CurrencyPairList from "./currencyPairList";
import CurrencyPairDetail from "./currencyPairDetail";

export default () => {
    return <Provider store={store}>
        <div className="container">
            <h1>Криптовалютная биржа</h1>
            <div className="row">
                <div className="col-sm-4">
                    <CurrencyPairList/>
                </div>
                <div className="col-sm-8">
                    <CurrencyPairDetail/>
                </div>
            </div>
        </div>
    </Provider>
}