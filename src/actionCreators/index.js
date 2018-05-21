import {ACTION_CHANGE_ACTIVE, ACTION_LOAD_CURRENCY_PAIR, ACTION_LOAD_CURRENCY_PAIR_LIST} from "../constants";

export function loadCurrencyPairList() {
    return {
        type: ACTION_LOAD_CURRENCY_PAIR_LIST,
        api: 'https://poloniex.com/public?command=return24hVolume',
    }
}

export function loadCurrencyPair(currencyPair) {
    return {
        type: ACTION_LOAD_CURRENCY_PAIR,
        payload: {id: currencyPair},
        api: `https://poloniex.com/public?command=returnOrderBook&currencyPair=${currencyPair}`,
    }
}


export function changeActive(currencyPair) {
    return {
        type: ACTION_CHANGE_ACTIVE,
        payload: {active: currencyPair}
    }
}