import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../modules/home/screens/Home.controller';
import CustomTabBar from '../components/CustomTabBar';

const MainTab = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false, unmountOnBlur: true, }} >
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}

export default MainTab