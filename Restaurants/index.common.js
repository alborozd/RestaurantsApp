
import React, { Component } from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from "./routes";

import { Provider } from "react-redux"
import store from "./app/store";

export default class Restaurants extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>{routes}</Router>
            </Provider>
        );
    }
}