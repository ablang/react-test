import {combineReducers} from 'redux';
import currencyPairList from './currencyPairList';
import activeCurrencyPair from './activeCurrencyPair';

export default combineReducers({currencyPairList, activeCurrencyPair})