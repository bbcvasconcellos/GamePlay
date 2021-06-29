import { StyleSheet } from "react-native"; //creates an object with the interface style
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 360,
        marginTop: 26
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.color.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    },
    subtitle: {
        color: theme.color.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 46,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    }
});
