import { combineReducers } from "redux"
import user from "./user";
import restaurants from "./restaurants";
import filters from "./filters";

export default combineReducers({
    user,
    restaurants,
    filters
})