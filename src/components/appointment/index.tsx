import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import { GuildProps } from "../guild";
import { GuildIcon } from "../guildIcon";
import { categories } from "../../utility/categories";

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest}: Props){
    const [category] = categories.filter(item => item.id === data.category);
    const {owner} = data.guild;
    const {primary, on} = theme.color;

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[theme.color.secondary50, theme.color.secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>
 
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        
                        <Text style={styles.category}>
                            {category && category.title ? category.title : "Sem categoria..."}
                        </Text>
                    </View>
                    
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                        
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on}/>
                            <Text style={[
                                styles.player,
                                {color: owner ? primary : on}
                            ]}>
                                {owner ? 'Host' : 'Guest'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>                   
        </RectButton>
    );
}