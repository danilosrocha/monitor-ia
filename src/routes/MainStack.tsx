import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preloader from "../modules/preloader/screens/Preloader.controller";
import SignIn from "../modules/signIn/screens/SignIn.controller";
import SignUp from "../modules/signUp/screens/SignUp.controller";
import MyDrawer from "./MainDrawer";
import MainTab from "./MainTab";


const Stack = createStackNavigator();

const MainStack = () => (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Preload" component={Preloader} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="MainTab" component={MainTab} />

    </Stack.Navigator >
);

export default MainStack
