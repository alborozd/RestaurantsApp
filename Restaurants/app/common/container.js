import React, { Component } from 'react';
import { View, Platform } from "react-native"
import EStyleSheet from 'react-native-extended-stylesheet';

const navbarHeight = Platform.OS === 'ios'? 64 : 54

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        paddingTop: navbarHeight
    }
})

class Container extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

export default Container;