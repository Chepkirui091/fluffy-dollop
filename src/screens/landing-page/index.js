import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Button from "../../components/Button";
import colors from "../../theme/colors";
import DMTButton from "../../components/Button";

const LandingScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.landingImage}
                        source={require("../../assets/landing.png")}
                    />
                </View>
                <Text style={styles.headerText}>Discover Your Dream Job here</Text>
                <Text style={styles.descriptionText}>
                    Explore all the existing job roles based on your interest and study major
                </Text>
                <View style={styles.landingButtons}>
                    <DMTButton
                        title="Login"
                        variant="contained"
                        color="primary"
                        onPress={() => navigation.navigate("Login")}
                        style={styles.loginButton}
                    />
                    <DMTButton
                        title="Sign Up"
                        variant="outlined"
                        color="primary"
                        onPress={() => navigation.navigate("SignUp")}
                        style={styles.signUpButton}
                    />
                </View>
            </View>
        </View>
    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    headerContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    headerText: {
        color: colors.primary,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 20,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    landingImage: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    descriptionText: {
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 20,
        marginBottom: 30,
    },
    landingButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        // width: "80%",
    },
    signUpButton: {
        // backgroundColor: colors.white,
        width: 160,
        color: colors.black,
    },
    loginButton: {
        width: 160
    }

});
