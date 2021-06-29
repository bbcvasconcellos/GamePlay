import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>; //FC=functional component
    hasCheckBox?: boolean;
    checked?: boolean; //display a square for any tagged icon
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox = false,
    ...rest
}: Props){
    return(
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[theme.color.secondary50, theme.color.secondary70]}
            >
                <LinearGradient 
                    style={[styles.content, {opacity: checked ? 1 : 0.5}]}
                    colors={[checked ? theme.color.secondary85 : theme.color.secondary50, theme.color.secondary40]}
                >
                    {
                    hasCheckBox &&
                    <View style={checked ? styles.checked : styles.check}/>
                    }
                    <Icon 
                        width={48} 
                        height={48}
                    />
                    <Text style={styles.title}>
                        { title }
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    );
}