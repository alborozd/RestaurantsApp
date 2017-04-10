
import React, { Component } from 'react';
import { Router, Actions } from 'react-native-router-flux';
import routes from "./routes";

export default class Restaurants extends Component {
    render() {
        return (
            <Router>{routes}</Router>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });
