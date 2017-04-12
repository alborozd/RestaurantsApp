import Constants from "../constants";

const defaultState = {
    data: [],
    loading: false
}

export default (state = defaultState, action) => {

    const { type, payload, error } = action;

    switch(type) {
        case Constants.LOAD_RESTAURANTS + Constants.START:
            return Object.assign({}, state, { loading: true });

        case Constants.LOAD_RESTAURANTS + Constants.FAIL:
            return Object.assign({}, state, { loading: false });

        case Constants.LOAD_RESTAURANTS + Constants.SUCCESS: 
            return Object.assign({}, {
                data: payload.data,
                loading: false
            });
    }

    return state;
}