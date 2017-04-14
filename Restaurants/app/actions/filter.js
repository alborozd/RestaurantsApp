import Constants from "../constants";
import { getFilters } from "../api";

export function loadFilters() {
    return (dispatch, getState) => {
        dispatch({ type: Constants.LOAD_FILTERS + Constants.START });

        getFilters()
            .then(response => {

                dispatch({
                    type: Constants.LOAD_FILTERS + Constants.SUCCESS,
                    payload: { data: response }
                });

            }).catch(error => {
                dispatch({
                    type: Constants.LOAD_FILTERS + Constants.FAIL,
                    error
                });
            })
    }
}

export function setFilter(filter) {
    return {
        type: Constants.SET_FILTER,
        payload: {
            filter
        }
    }
}


