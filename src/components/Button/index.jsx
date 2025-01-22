import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.styles";
import colors from "../../theme/colors";

const DMTButton = ({
                    title,
                    onPress,
                    variant = "contained",
                    color = colors.primary.main,
                    textStyle,
                    disabled = false,
                    style,
                }) => {
    const getButtonStyle = () => {
        switch (variant) {
            case "outlined":
                return [styles.button, styles.outlined, styles[`outlined_${color}`]];
            case "text":
                return [styles.button, styles.text, styles[`text_${color}`]];
            default:
                return [styles.button, styles.contained, styles[`contained_${color}`]];
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case "outlined":
                return [styles.text, styles.outlinedText, textStyle];
            case "text":
                return [styles.text, styles.textVariant, textStyle];
            default:
                return [styles.text, styles.containedText, textStyle];
        }
    };

    return (
        <TouchableOpacity
            style={[...getButtonStyle(), disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={getTextStyle()}>{title}</Text>
        </TouchableOpacity>
    );
};

export default DMTButton;
