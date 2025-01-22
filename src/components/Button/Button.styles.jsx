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
        backgroundColor: colors.primary.main,
    },
    contained_primary: {
        backgroundColor: colors.primary.main,
    },
    contained_secondary: {
        backgroundColor: colors.secondary.main,
    },
    contained_custom: {
        backgroundColor: colors.custom.main,
    },
    outlined: {
        borderWidth: 2,
    },
    outlined_primary: {
        borderColor: colors.primary.main,
    },
    outlined_secondary: {
        borderColor: colors.secondary.main,
    },
    outlined_custom: {
        borderColor: colors.custom.main,
    },
    text: {
        backgroundColor: "transparent",
    },
    text_primary: {
        color: colors.primary.main,
    },
    text_secondary: {
        color: colors.secondary.main,
    },
    text_custom: {
        color: colors.custom,
    },
    textVariant: {
        fontSize: 16,
        fontWeight: "bold",
    },
    containedText: {
        color: colors.white.main,
    },
    outlinedText: {
        color: colors.primary.main,
    },
    disabled: {
        backgroundColor: colors.gray.main,
        borderColor: colors.gray.main,
    },
});
