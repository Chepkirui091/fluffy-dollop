import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomePageBody = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Home Page!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EEEEEE",
        flex: 1,
        marginTop: 20,
        width: "100%",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "#000",
    },
});

export default HomePageBody;
