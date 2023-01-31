import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from "./MainTab";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <Drawer.Screen name="MainTab" component={MainTab} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;