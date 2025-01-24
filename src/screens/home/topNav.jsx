import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const TopNav = ({ scrollY }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
        <View style={styles.stickyHeader}>
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
        </View>
    );
};

TopNav.Greetings = () => (
    <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Good morning Akulle!</Text>
        <Text style={styles.greetingText}>Account Balance:</Text>
        <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>
                ETB 41,900.1
            </Text>
        </View>
        <Text style={styles.greetingText}>View Balances</Text>

    </View>
);

const styles = StyleSheet.create({
    stickyHeader: {
        // backgroundColor: "#001F37",
        zIndex: 10,
        elevation: 5,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        height: 60,
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
        paddingVertical: 10,
    },
    greeting: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    balanceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    balanceText: {
        color: "#fff",
        fontSize: 32,
        marginRight: 10,
    },
    greetingText: {
        color: "#fff",
        fontSize: 14,
    },
});

export default TopNav;
