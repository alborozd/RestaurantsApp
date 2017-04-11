
import React, { Component } from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from "./routes";

import { Provider } from "react-redux"
import store from "./app/store";

import EStyleSheet from 'react-native-extended-stylesheet';
import theme from "./app/styles/global";
EStyleSheet.build(theme); // calculate styles

export default class Restaurants extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>{routes}</Router>
            </Provider>
        );
    }
}