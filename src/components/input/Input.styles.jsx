import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export const inputStyles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 14,
        color: colors.primary,
        fontWeight: "bold",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: colors.border || "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: colors.input,
    },
});
