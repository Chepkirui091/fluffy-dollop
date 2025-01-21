import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopNav from "./topNav";
import HomePageBody from "./homePageBody";

export const HomeScreen = () => {
    return (
        <LinearGradient
            colors={["#001F37", "#00589D"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <TopNav />
            <HomePageBody />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 24,
    }
});
