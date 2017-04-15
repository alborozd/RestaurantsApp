import Constants from "../constants";

const defaultState = {
    userName: ""
}

export default (state = defaultState, action) => {

    const { type, payload } = action;

    switch(type) {
        case Constants.CHANGE_USERNAME: return { userName: payload.userName };

        case Constants.GET_USER_NAME + Constants.SUCCESS: return { userName: payload.userName };
    }

    return state;
}