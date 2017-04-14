import React, { Component } from "react";
import {
    View, TouchableOpacity, Image, Text, TouchableWithoutFeedback
} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from "react-native-router-flux";
import { Label } from "../common/controls";

export default class InfoModal extends Component {

    close() {
        Actions.pop();
        if (this.props.onClose)
            this.props.onClose();
    }

    render() {
        return (

            <TouchableOpacity onPress={() => Actions.pop()}
                style={[styles.container, styles.alignCenterContainer]}>

                <View style={styles.content}>
                    <Label>{this.props.name}</Label>
                    <Label>Bad reviews: {this.props.reviewBad}</Label>
                    <Label>Good reviews: {this.props.reviewGood}</Label>
                </View>

            </TouchableOpacity>

        )
    }
}

const styles = EStyleSheet.create({
    container: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0,0,0,0.3)", alignItems: "center" },
    alignCenterContainer: { justifyContent: "center", paddingTop: "60rem" },
    alignTopContainer: { justifyContent: "flex-start", paddingTop: "60rem" },
    content: { backgroundColor: "#fff", borderRadius: "20rem", padding: "60rem", marginLeft: "20rem", marginRight: "20rem" },
    closeButton: { position: 'absolute', top: "10rem", right: "10rem", padding: "10rem", },
    closeButtonImage: { width: "30rem", height: "30rem" }
});