import { Platform, Dimensions, StyleSheet } from 'react-native';
// global styles
// available by "$styleName" for EStyleSheet

var {width} = Dimensions.get("window");

export default {
    rem: width / 720,
    fullWidth: width,
    initBackground: "#222222",
    mainBackground: "#eee",
    listRowBorder: "#DBDBDB",
    drawerTop: "#0D0D0D"
}