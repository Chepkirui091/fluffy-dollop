import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import DMTButton from "../../components/Button";

const TopNav = () => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuIcon}>
                    <Icon name="menu" size={30} color="#fff" />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                        source={require("../../assets/logo.png")}
                        style={styles.logo}
                    />
                </View>

                <TouchableOpacity style={styles.avatarContainer}>
                    <Image
                        source={require("../../assets/loginbg.png")}
                        style={styles.avatar}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greeting}>Good morning Akulle!</Text>
                <Text style={styles.greetingText}>Account Balance:</Text>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>
                        {isBalanceVisible ? "ETB 41,900.1" : "ETB *****"}
                    </Text>
                    <TouchableOpacity onPress={toggleBalanceVisibility} style={styles.iconButton}>
                        <Icon name={isBalanceVisible ? "eye-off" : "eye"} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 28,
        padding: 10,
        height: 53,
    },
    menuIcon: {
        marginLeft: 10,
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: "contain",
    },
    avatarContainer: {
        marginRight: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    greetingContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 20,
    },
    greeting: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginRight: 10,
    },
    balanceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    balanceText: {
        color: "#fff",
        fontSize: 16,
        marginRight: 10,
    },
    greetingText: {
        color: "#fff",
        fontSize: 14,
    },
    iconButton: {
        padding: 5,
    },
});

export default TopNav;
