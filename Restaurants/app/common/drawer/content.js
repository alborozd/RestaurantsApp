import React, { Component } from "react";
import {
    View, StyleSheet, Image, TextInput
} from "react-native";
import Container from "../container";
import { Label } from "../controls";
import { connect } from "react-redux"
import EStyleSheet from "react-native-extended-stylesheet";
import { changUsername } from "../../actions/user";
import { bindActionCreators } from "redux";
import I18n from "react-native-i18n";

const MAX_NAME_LENGTH = 20;

class DrawerContent extends Component {

    state = {
        name: ""
    }

    setName(name) {
        if (name && name.length > MAX_NAME_LENGTH) return;
        this.setState({ name });
    }

    changeName(event) {
        let text = event.nativeEvent.text;
        if (text) {
            this.props.changUsername(text);
            this.setState({ name: "" })
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logoContent}>
                    <View>
                        <Image style={styles.logo} source={require("../../../assets/img/react-logo.png")} />
                    </View>
                    <View style={styles.nameContainer}>
                        <Label style={styles.userName}>Hello {this.props.userName}!</Label>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput blurOnSubmit={true}
                        value={this.state.name}
                        onChangeText={(text) => this.setName(text)}
                        onSubmitEditing={(event) => this.changeName(event)} style={styles.input}
                        placeholder={I18n.t("userNamePlaceholder")}
                        placeholderTextColor="#fff" />
                </View>
            </View>

        );
    }
}

const styles = EStyleSheet.create({
    container: { flex: 1, backgroundColor: "$initBackground" },
    input: { height: "70rem", color: "#fff", borderWidth: 1, borderRadius: 5, paddingHorizontal: "15rem", backgroundColor: "#565657" },
    inputContainer: { flex: 1, paddingTop: "50rem", paddingHorizontal: "50rem" },
    userName: { color: "#fff", alignSelf: "center" },
    nameContainer: { paddingVertical: "30rem", backgroundColor: "#000" },
    logoContent: { justifyContent: "center", paddingTop: "150rem", backgroundColor: "$drawerTop" },
    logo: { width: "300rem", height: "300rem", alignSelf: "center" }
})

export default connect((state, props) => ({
    userName: state.user.userName
}), (dispatch) => ({
    changUsername: bindActionCreators(changUsername, dispatch)
}))(DrawerContent);