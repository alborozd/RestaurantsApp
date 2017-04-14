import Constants from "../constants";
import { getRestaurants } from "../api";

export function loadRestaurants() {
    return (dispatch, getState) => {
        dispatch({ type: Constants.LOAD_RESTAURANTS + Constants.START });

        getRestaurants()
            .then(response => {

                let data = response.data.map(item => ({
                    id: item.id,
                    logo: item.logo,
                    logo2: item.logo_2,
                    logoBig: item.logo_big,
                    name: item.name,
                    reviewGood: item.review_good_all,
                    reviewBad: item.review_bad_all,
                    filters: item.filter
                }));

                dispatch({
                    type: Constants.LOAD_RESTAURANTS + Constants.SUCCESS,
                    payload: { data }
                });

            }).catch(error => {
                dispatch({
                    type: Constants.LOAD_RESTAURANTS + Constants.FAIL,
                    error
                });
            })
    }
}


