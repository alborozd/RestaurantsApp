import Constants from "../constants";
import DataStorage from "../services/dataStorage";

export function changUsername(username) {
    return (dispatch, getState) => {
        DataStorage.set(Constants.USER_NAME_KEY, username)
            .then(error => {
                if (error) {
                    dispatch({
                        type: Constants.CHANGE_USERNAME + Constants.FAIL,
                        payload: { error }
                    })
                } else {
                    dispatch({
                        type: Constants.CHANGE_USERNAME,
                        payload: {
                            userName: username
                        }
                    })
                }
            });
    }
}

export function loadUsername() {
    return (dispatch, getState) => {
        DataStorage.get(Constants.USER_NAME_KEY, (error, value) => {
            if (error) {
                dispatch({
                    type: Constants.GET_USER_NAME + Constants.FAIL,
                    payload: { error }
                })
            } else {
                dispatch({
                    type: Constants.GET_USER_NAME + Constants.SUCCESS,
                    payload: {
                        userName: value || "new user"
                    }
                })
            }
        })
    }
}