import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme"; 

//type to reuse the same image in different files using the image's url
type Props = {
    urlImage: string;
}

export function Avatar({urlImage}: Props){
    return(
        <LinearGradient
            style={styles.container}
            colors={[theme.color.secondary50, theme.color.secondary70]}
        >
        <Image
            source={{uri: urlImage}}
            style={styles.avatar}       
        />
        </LinearGradient>
    );
}