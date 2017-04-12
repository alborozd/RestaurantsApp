import Constants from "../constants";
import { Actions } from "react-native-router-flux";

export default store => next => action => {

    const { type, ...rest } = action;

    if (type && type === Constants.LOAD_RESTAURANTS + Constants.SUCCESS) {
        Actions.drawer();
    }
    next({
        type,
        ...rest
    });

}