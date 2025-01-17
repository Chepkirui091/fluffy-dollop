import React from "react";
import { View, TextInput, Text } from "react-native";
import {inputStyles} from "./Input.styles";

const Input = ({
                         label,
                         placeholder,
                         value,
                         onChangeText,
                         secureTextEntry,
                         keyboardType,
                         containerStyle,
                     }) => {
    return (
        <View style={[inputStyles.container, containerStyle]}>
            {label && <Text style={inputStyles.label}>{label}</Text>}
            <TextInput
                style={inputStyles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    );
};

export default Input;
