import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import api from '../middlewares/api'

const enhancer = applyMiddleware(api);

export default createStore(reducers, {}, enhancer);