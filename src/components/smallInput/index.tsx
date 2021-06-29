import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

//this function will take any prop/input from textinput using textinputprops
export function SmallInput({...rest}: TextInputProps){
    return(
        <TextInput 
            style={styles.container}
            keyboardType="numeric"
            {...rest}
        />
    );
}