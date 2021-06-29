import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";
import DiscordSvg from "../../assets/discord.svg";

const {CDN_IMAGE} = process.env

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({guildId, iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    return(
        <View style={styles.container}> 
        {
            iconId ?  
            <Image 
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
            /> 
            :
            <DiscordSvg
                width={40}
                height={40}
            />

        }     
        </View>            
    );
}

//data:image/png;base64,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