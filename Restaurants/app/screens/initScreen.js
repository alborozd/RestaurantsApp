import React, { Component } from "react";
import {
    View, Animated, Image
} from "react-native";
import Easing from 'react-native/Libraries/Animated/src/Easing';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from "react-native-router-flux";
import { Label } from "../common/controls";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadRestaurants } from "../actions/restaurants";
import { loadUsername } from "../actions/user";
import I18n from "react-native-i18n";

class InitScreen extends Component {

    constructor(props) {
        super(props);

        this.animatedValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate();
        this.props.loadRestaurants();
        this.props.loadUsername();
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
                <Animated.Image
                    style={[{transform: [{ rotate: spin }] }, styles.logo]}
                    source={require("../../assets/img/logo_white.png")} />
                <Label style={styles.message}>{I18n.t("loadingMessage")}</Label>
            </View>
        );
    }
}


const styles = EStyleSheet.create({
    container: { flex: 1, justifyContent: "center", backgroundColor: "$initBackground" },
    logo: { position: "absolute", top: "20%", width: "300rem", height: "300rem", alignSelf: "center" },
    message: { alignSelf: "center", color: "#fff", position: "absolute", bottom: "20%" }
});

export default connect((state, props) => ({}), (dispatch) => ({
    loadRestaurants: bindActionCreators(loadRestaurants, dispatch),
    loadUsername: bindActionCreators(loadUsername, dispatch)
}))(InitScreen);