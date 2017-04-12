import { createStore, applyMiddleware } from "redux"
import reducer from "../reducer";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk'
import routing from "../middlewares/routing";

const store = createStore(reducer, {}, applyMiddleware(thunk, createLogger(), routing));

export default store;
