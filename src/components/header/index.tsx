import React, { ReactNode} from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props ={
    title: string;
    action?: ReactNode;
}

export function Header({title, action}: Props){


    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack(); //returns to the previous screen
    }

    return (
        <LinearGradient
            colors={[theme.color.secondary100, theme.color.secondary40]}
            style={styles.container}
        >
            {/*This will create the top left arrow button in the header to return to the previous screen*/}
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.color.heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action ? 
                <View>
                    { action }
                </View>
                : 
                <View style={{width: 24}}/>
            }

        </LinearGradient>
    )
}