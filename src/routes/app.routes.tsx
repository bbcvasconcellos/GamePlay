/*This is the routes for the application; it will provide a path/route 
according to where the user selects in the screen
*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/home";
import { theme } from "../global/styles/theme";
import { AppointmentDetails } from "../screens/appointmentDetails";
import { AppointmentCreate } from "../screens/appointmentCreate";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes(){
    return(
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle: {
                backgroundColor: theme.color.secondary100
                }
            }}
        > 
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    );
}