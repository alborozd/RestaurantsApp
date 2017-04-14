import Constants from "../constants";

export function changUsername(username) {
    return {
        type: Constants.CHANGE_USERNAME,
        payload: {
            userName: username
        }
    }
}