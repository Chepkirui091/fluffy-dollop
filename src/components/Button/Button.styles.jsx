import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    contained: {
        backgroundColor: colors.primary,
    },
    contained_primary: {
        backgroundColor: colors.primary,
    },
    contained_secondary: {
        backgroundColor: colors.secondary,
    },
    contained_custom: {
        backgroundColor: colors.custom,
    },
    outlined: {
        borderWidth: 2,
    },
    outlined_primary: {
        borderColor: colors.primary,
    },
    outlined_secondary: {
        borderColor: colors.secondary,
    },
    outlined_custom: {
        borderColor: colors.custom,
    },
    text: {
        backgroundColor: "transparent",
    },
    text_primary: {
        color: colors.primary,
    },
    text_secondary: {
        color: colors.secondary,
    },
    text_custom: {
        color: colors.custom,
    },
    textVariant: {
        fontSize: 16,
        fontWeight: "bold",
    },
    containedText: {
        color: colors.white,
    },
    outlinedText: {
        color: colors.primary,
    },
    disabled: {
        backgroundColor: colors.gray,
        borderColor: colors.gray,
    },
});
