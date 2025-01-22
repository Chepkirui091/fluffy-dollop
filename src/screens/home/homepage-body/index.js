import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TransactionLinks from "./transaction links";

const HomepageBody = () => {
    return (
        <View style={styles.container}>
            <TransactionLinks />
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

export default HomepageBody;
