import { StyleSheet} from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: theme.color.secondary40,
        color: theme.color.heading,
        borderRadius: 8,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: theme.color.secondary50,
        paddingLeft: 16,
        paddingTop: 16,
        textAlignVertical: 'top'
    }
});