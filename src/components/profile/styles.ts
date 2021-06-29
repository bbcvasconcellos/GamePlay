import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.color.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.color.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight
    }
});