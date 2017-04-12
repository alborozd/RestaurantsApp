import { combineReducers } from "redux"
import user from "./user";
import restaurants from "./restaurants";

export default combineReducers({
    user,
    restaurants
})