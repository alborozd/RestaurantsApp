import React, { Component } from "react";
import {
    Text, View, StyleSheet
} from "react-native";


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#f0f",
    }
})

class Root extends Component {
    render() {
        return (
            <View style={styles.root}>
                
                    {this.props.children}
                
            </View>
        );
    }
}

export default Root;
