import {Record, OrderedMap} from 'immutable'
import {ACTION_LOAD_CURRENCY_PAIR, ACTION_LOAD_CURRENCY_PAIR_LIST, ACTION_START, ACTION_SUCCESS} from "../constants";

const CurrencyPairRecord = new Record({
    name: undefined,
    id: undefined,
    data: [],
    loaded: false,
    loading: false,
});

export const ListStateRecord = new Record({
    loaded: false,
    loading: false,
    entities: new OrderedMap({})
});

export default (state = new ListStateRecord(), action) => {
    const {type, response, payload} = action;

    switch (type) {
        case ACTION_LOAD_CURRENCY_PAIR_LIST + ACTION_START:
            return state.set('loading', true);
        case ACTION_LOAD_CURRENCY_PAIR_LIST + ACTION_SUCCESS:
            const entities = Object.keys(response).reduce((acc, key) => {
                if (typeof response[key] !== 'object') {
                    return acc;
                }
                const name = Object.keys(response[key]).join(' - ');
                return acc.set(key, new CurrencyPairRecord({name: name, id: key}));
            }, new OrderedMap({}));

            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', entities);
        case ACTION_LOAD_CURRENCY_PAIR + ACTION_START:
            return state.setIn(['entities', payload.id, 'loading'], true);
        case ACTION_LOAD_CURRENCY_PAIR + ACTION_SUCCESS:
            return state
                .setIn(['entities', payload.id, 'data'], response)
                .setIn(['entities', payload.id, 'loading'], false)
                .setIn(['entities', payload.id, 'loaded'], true);
    }

    return state;
}