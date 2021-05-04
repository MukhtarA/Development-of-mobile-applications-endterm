import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import App from "../../App";
import ScheduleScreen from "../screens/ScheduleScreen";

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ScheduleScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;
