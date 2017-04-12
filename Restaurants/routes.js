import React from "react";
import { Scene, Modal, Actions, ActionConst } from 'react-native-router-flux';
import InitScreen from "./app/screens/initScreen";
import Root from "./app/screens/root";
import Drawer from "./app/common/drawer";
import Restaurants from "./app/screens/restaurants";
import Filters from "./app/screens/filters";
import InfoModal from "./app/screens/infoModal";
import { Text, TouchableOpacity } from "react-native";


export default (
    <Scene key="modal" component={Modal} hideNavBar >
        <Scene key="root" hideNavBar hideTabBar>

            <Scene key="init" component={InitScreen} />
            <Scene key="drawer" component={Drawer} open={false} initial={true}  >
                <Scene
                    key="main">
                    <Scene key="restaurants" component={Restaurants} title="Restaurants" hideTabBar  />
                </Scene>
            </Scene>

            <Scene key="filters" component={Filters} hideNavBar={true} />
        </Scene>

        <Scene key="infoModal" component={InfoModal} />
    </Scene>
)