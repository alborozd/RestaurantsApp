import Constants from "../constants";

const defaultState = {
    selected: "",
    data: [],
    loading: false
}

export default (state = defaultState, action) => {

    const { type, payload, error } = action;

    switch(type) {
        case Constants.LOAD_FILTERS + Constants.START:
            return Object.assign({}, state, { loading: true });

        case Constants.LOAD_FILTERS + Constants.FAIL:
            return Object.assign({}, state, { loading: false });

        case Constants.LOAD_FILTERS + Constants.SUCCESS: 
            return Object.assign({}, state, {
                data: payload.data,
                loading: false
            });

        case Constants.SET_FILTER: 
            return Object.assign({}, state, {
                selected: payload.filter
            });
    }

    return state;
}