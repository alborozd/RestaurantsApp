import React, { Component } from 'react';
import { Text } from "react-native";

class Label extends Component {
    render() {
        return (
            <Text {...this.props}>{this.props.children}</Text>
        );
    }
}

export default Label;