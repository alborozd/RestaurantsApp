import React from "react";
import { Scene, Modal, Actions, ActionConst } from 'react-native-router-flux';
import InitScreen from "./app/screens/initScreen";
import Root from "./app/screens/root";
import Drawer from "./app/common/drawer";
import Restaurants from "./app/screens/restaurants";
import Filters from "./app/screens/filters";
import InfoModal from "./app/screens/infoModal";
import { Text, TouchableOpacity } from "react-native";
import I18n from "react-native-i18n";

module.exports =
    <Scene key="modal" component={Modal} hideNavBar >
        <Scene key="root" hideNavBar hideTabBar>

            <Scene key="init" component={InitScreen} initial={true} />
            <Scene key="drawer" type="replace" component={Drawer} open={false}  >
                <Scene key="main">
                    <Scene key="restaurants" component={Restaurants} title={I18n.t("mainTitle")} hideTabBar />
                </Scene>
            </Scene>

            <Scene key="filters" component={Filters} hideNavBar={true} />
        </Scene>

        <Scene key="infoModal" component={InfoModal} />
    </Scene>
