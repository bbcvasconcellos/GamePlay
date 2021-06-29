import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}

export function Background({children}: Props){
    return(
        <LinearGradient
            style={styles.container}
            colors={[theme.color.secondary80, theme.color.secondary100]}
        >
        {children}
        </LinearGradient>
    );
}