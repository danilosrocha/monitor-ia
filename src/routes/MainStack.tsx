import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Preloader from "../modules/preloader/screens/Preloader.controller";
import SignIn from "../modules/signIn/screens/SignIn.controller";
import SignUp from "../modules/signUp/screens/SignUp.controller";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name="Preload" component={Preloader} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator >
);

