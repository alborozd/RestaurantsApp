import React, {Component} from "react"; 
import {
    Text, View, StyleSheet, TouchableOpacity
} from "react-native";

import { Actions } from "react-native-router-flux";

class InitScreen extends Component {

    toNext() {
        //Actions.tab3()
        //Actions.refresh({key: 'drawer', open: true });
        Actions.drawer();
    }

    render() {

        return (
            <View style={{marginTop: 200}}>
                <Text>Init screen</Text>
                <TouchableOpacity style={{backgroundColor: "green", width: 100, height: 100}} 
                onPress={() => this.toNext()}>
                        <Text>Go to main</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

export default InitScreen;