import React, { Component } from "react";
import {
    Text, View, StyleSheet, TouchableOpacity, Animated, Image
} from "react-native";
import Easing from 'react-native/Libraries/Animated/src/Easing';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from "react-native-router-flux";

class InitScreen extends Component {

    constructor(props) {
        super(props);

        this.animatedValue = new Animated.Value(0)
    }


    componentDidMount() {
        this.animate()
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {
        const spin = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        return (
            <View style={styles.container}>
                <View>
                <Animated.Image
                    style={[{transform: [{ rotate: spin }] }, styles.logo]}
                    source={require("../../assets/img/logo_white.jpg")} />
                </View>
                <Text style={styles.message}>Loading...</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
       // alignContent: "center",
        justifyContent: "center",
        backgroundColor: "$initBackground"
    },
    logo: {
        width: "300rem",
        height: "300rem",
        alignSelf: "center",
       // marginTop: "-300rem"
    },
    message: {
        alignSelf: "center",
        color: "#fff"
    }
})

export default InitScreen;