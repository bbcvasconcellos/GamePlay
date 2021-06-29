import React from "react";
import { NavigationContainer } from "@react-navigation/native"; //responsible for the routes direction. ex: if the user opens a screen and then go back to the previous one

import { SignIn } from "../screens/signin";

import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

export function Routes(){
    const { user } = useAuth();

    return(
        <NavigationContainer>
            {user.id ? <AppRoutes/> : <SignIn/>}
        </NavigationContainer>
    )
}