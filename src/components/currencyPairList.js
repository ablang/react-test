import React from 'react'
import CurrencyPair from './currencyPair'
import {connect} from 'react-redux'
import {loadCurrencyPairList, loadCurrencyPair} from '../actionCreators'
import Loader from "./loader";
import {changeActive} from '../actionCreators'

class CurrencyPairList extends React.Component {

    componentDidMount() {
        this.props.loadCurrencyPairList();
    }

    render() {
        const {currencyPairList, loading, active} = this.props;
        if (loading) {
            return <Loader/>
        }
        const list = currencyPairList.valueSeq().toArray().map(currencyPair => {
            return <li key={currencyPair.id} onClick={this.handleClick(currencyPair.id)}
                       className={"list-group-item " + (currencyPair.id === active ? 'active' : '')}>
                <CurrencyPair currencyPair={currencyPair}/>
            </li>
        });
        return <ul className="list-group">
            {list}
        </ul>
    }

    handleClick = (key) => () => {
        const {changeActive, loadCurrencyPair, currencyPairList} = this.props;
        changeActive(key);
        if (!currencyPairList.get(key).loaded) {
            loadCurrencyPair(key);
        }
    }
}

export default connect(
    ({activeCurrencyPair, currencyPairList}) => ({
        active: activeCurrencyPair,
        loading: currencyPairList.loading,
        loaded: currencyPairList.loaded,
        currencyPairList: currencyPairList.entities
    }),
    {loadCurrencyPairList, loadCurrencyPair, changeActive}
)(CurrencyPairList)