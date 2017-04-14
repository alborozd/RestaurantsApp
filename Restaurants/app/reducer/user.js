import Constants from "../constants";

const defaultState = {
    userName: "new user"
}

export default (state = defaultState, action) => {

    const { type, payload } = action;

    switch(type) {
        case Constants.CHANGE_USERNAME: return { userName: payload.userName };
    }

    return state;
}