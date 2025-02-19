import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import colors from "../../theme/colors";
import DMTButton from "../../components/Button";
import {ROUTES} from "../../constants";

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
                        color={colors.primary.main}
                        onPress={() => navigation.navigate(ROUTES.LOGIN)}
                        style={styles.loginButton}
                    />
                    <DMTButton
                        title="Sign Up"
                        variant="outlined"
                        color="primary"
                        onPress={() => navigation.navigate(ROUTES.SIGN_UP)}
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
        backgroundColor: colors.white.main,
    },
    headerContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    headerText: {
        color: colors.primary.main,
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
        color: colors.black.main,
    },
    loginButton: {
        width: 160
    }

});
