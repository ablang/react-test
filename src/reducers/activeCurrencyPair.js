import {ACTION_CHANGE_ACTIVE} from "../constants";

export default (state = null, action) => {
    const {type, payload} = action;
    switch (type) {
        case ACTION_CHANGE_ACTIVE:
            state = payload.active;
    }
    return state;
}