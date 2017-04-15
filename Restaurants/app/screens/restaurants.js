import React, { Component } from "react";
import {
    View, StyleSheet, TouchableOpacity, Image, ListView, TouchableWithoutFeedback, Keyboard
} from "react-native";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux"
import Container from "../common/container";
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Label } from "../common/controls";
import Constants from "../constants";

class MainScreen extends Component {

    renderRow(row) {
        const imageUri = Constants.BASE_URL + row.logo;

        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={[styles.listRow, styles.bordered]}>
                    <TouchableOpacity onPress={() => Actions.infoModal({ name: row.name, reviewGood: row.reviewGood, reviewBad: row.reviewBad })}>
                        <View style={styles.rowContainer}>
                            <View style={[styles.imageContainer, styles.bordered]}>
                                <Image resizeMode="contain" style={styles.logo} source={{ uri: imageUri }} />
                            </View>
                            <View style={styles.contentContainer}>
                                <Label style={styles.rowLabel}>{row.name}</Label>
                                <Icon name="info-circle" size={25} color="#000" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {

        const { restaurants } = this.props;

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let dataSource = ds.cloneWithRows(restaurants);

        return (
            <Container style={styles.container}>
                <ListView
                    dataSource={dataSource}
                    renderRow={(row) => this.renderRow(row)}
                    enableEmptySections={true}
                />
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: { backgroundColor: "$mainBackground", paddingHorizontal: "50rem", marginTop: "40rem" },
    listRow: { flex: 1, backgroundColor: "#fff", marginBottom: "20rem", borderTopLeftRadius: 90, borderBottomLeftRadius: 90 },
    bordered: { borderColor: "$listRowBorder", borderWidth: 1 },
    logo: { width: "180rem", height: "180rem" },
    rowContainer: { flexDirection: "row", alignContent: "center", alignItems: "center" },
    imageContainer: { width: "182rem", height: "182rem", borderRadius: "91rem", marginLeft: "-2rem" },
    rowLabel: { marginLeft: "30rem", fontSize: 18 },
    contentContainer: { flex: 1, paddingRight: "20rem", flexDirection: "row", justifyContent: "space-between" }
});

export default connect((state) => ({
    userName: state.user.userName,
    restaurants: !state.filters.selected ?
        state.restaurants.data
        : state.restaurants.data.filter(item => item.filters.includes(state.filters.selected))
}))(MainScreen);