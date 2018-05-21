import {ACTION_FAIL, ACTION_START, ACTION_SUCCESS} from "../constants";

export default (store) => (next) => (action) => {
    const {type, api, ...rest} = action;

    if (!api) {
        return next(action);
    }

    next({...rest, type: type + ACTION_START});

    fetch(api)
        .then(response => response.json())
        .then(response => next({...rest, type: type + ACTION_SUCCESS, response}))
        .catch(error => next({...rest, type: type + ACTION_FAIL, error}));
}