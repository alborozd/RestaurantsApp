
import React, { Component } from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from "./routes";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from "react-redux"
import store from "./app/store";
import { TouchableOpacity, View } from "react-native";

import EStyleSheet from 'react-native-extended-stylesheet';
import theme from "./app/styles/global";
EStyleSheet.build(theme); // calculate styles


const styles = EStyleSheet.create({
    navbar: {
        backgroundColor: "$initBackground"
    },
    title: {
        color: "#fff"
    }
});


export default class Restaurants extends Component {

    backButton() {
        return (
            <TouchableOpacity onPress={() => Actions.refresh({ key: 'drawer', open: true })}>
                <Icon name="bars" size={25} color="#fff" />
            </TouchableOpacity>
        );
    }

    rightButton() {
        return (
            <TouchableOpacity onPress={() => Actions.filters()}>
                <Icon name="filter" size={25} color="#fff" />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Provider store={store}>
                <Router navigationBarStyle={styles.navbar}
                    renderBackButton={this.backButton}
                    renderRightButton={this.rightButton}
                    titleStyle={styles.title}>
                    {routes}
                </Router>
            </Provider>
        );
    }
}