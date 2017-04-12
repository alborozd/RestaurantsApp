import React, {Component} from "react"; 
import {
    Text, View, StyleSheet, TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux"
import Container from "../common/container";
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        backgroundColor: "#eee"
    }
})

class MainScreen extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text>  Main Screen!!! {this.props.userName}</Text>
                <TouchableOpacity onPress={() => Actions.filters()}>
                    <Text>Show filters</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => Actions.infoModal()}>
                    <Text>Show info</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

export default connect((state) => ({
    userName: state.user.userName
}))(MainScreen);