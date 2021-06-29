import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.color.heading,
        fontSize: 18
    },
    nameStatus: {
        fontFamily: theme.fonts.text400,
        color: theme.color.highlight,
        fontSize: 13
    },
    status: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9,
        marginTop: 4
    }
});