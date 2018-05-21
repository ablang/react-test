import React from 'react'

export default class CurrencyPair extends React.Component {

    render() {
        const {currencyPair} = this.props;
        return <span>{currencyPair.name}</span>
    }
}
