import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { Avatar } from "../avatar";
import { theme } from "../../global/styles/theme";

//store/represents the types of all the data to be used in Props
export type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({data}: Props){
    const isOnline = data.status === 'online';

    return(
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url}/>

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

                <View style={styles.status}>
                    <View
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline ? theme.color.on : theme.color.primary
                            }
                        ]}
                    />
                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>

        </View>
    );
}