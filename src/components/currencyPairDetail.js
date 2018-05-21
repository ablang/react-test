import React from 'react'
import {connect} from 'react-redux'
import Loader from "./loader";

class CurrencyPairDetail extends React.Component {

    render() {
        const {currencyPair} = this.props;
        if (!currencyPair) {
            return <p>Не выбрано валютная пара</p>
        }

        if (currencyPair.loading) {
            return <Loader/>
        }
        const items = currencyPair.data.asks.map((item, index) => <div key={index} className="col-sm-3 border">
            {item[0]}<br/>{item[1]}
        </div>);
        return <div>
            <h2>{currencyPair.name}</h2>
            <div className="row">
                {items}
            </div>
        </div>
    }
}


export default connect(({activeCurrencyPair, currencyPairList}) => ({currencyPair: currencyPairList.entities.get(activeCurrencyPair)}))(CurrencyPairDetail)