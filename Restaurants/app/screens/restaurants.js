import React, {Component} from "react"; 
import {
    Text, View, StyleSheet, TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux"

class MainScreen extends Component {
    render() {
        return (
            <View style={{marginTop: 100}}>
                <Text>  Main Screen!!! {this.props.userName}</Text>
                <TouchableOpacity onPress={() => Actions.filters()}>
                    <Text>Show filters</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.infoModal()}>
                    <Text>Show info</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect((state) => ({
    userName: state.user.userName
}))(MainScreen);