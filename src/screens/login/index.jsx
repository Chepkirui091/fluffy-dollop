import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../../components/input";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import DMTButton from "../../components/Button";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../constants";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();


    const SocialLoginButton = ({ name, backgroundColor, onPress }) => (
        <Icon.Button
            name={name}
            backgroundColor={backgroundColor}
            size={20}
            onPress={onPress}
            borderRadius={10}
            style={styles.socialButton}
            iconStyle={styles.iconStyle}
        />
    );

    const handleForgotPassword = () => {
        Alert.alert("Forgot Password", "Password recovery link will be sent to your email.");
    };

    const handleSignIn = () => {
        if (email === "daphne@gmail.com" && password === "pass") {
            navigation.navigate(ROUTES.MAIN);
        } else {
            // Show an error if the credentials are incorrect
            Alert.alert("Sign In", "Invalid email or password. Please try again.");
        }
    };


    const handleGoogleLogin = () => {
        Alert.alert("Google login", "Google login process initiated.");
    };

    const handleInstagramLogin = () => {
        Alert.alert("Instagram login", "Instagram login process initiated.");
    };

    const handleFacebookLogin = () => {
        Alert.alert("Facebook login", "Facebook login process initiated.");
    };

    const handleCreateAccount = () => {
        navigation.navigate(ROUTES.SIGN_UP);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Login here</Text>
                <Text style={styles.descriptionText}>
                    Welcome back you’ve{'\n'}been missed!
                </Text>
            </View>

            <Input
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Input
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.forgotPasswordContainer}>
                <DMTButton
                    title="Forgot Password?"
                    variant="text"
                    color="primary"
                    onPress={handleForgotPassword}
                    style={styles.forgotPasswordText}
                />
            </View>

            <DMTButton
                title="Sign In"
                variant="contained"
                color="primary"
                onPress={handleSignIn}
                style={styles.signInButton}
            />

            <DMTButton
                title="Create a new account"
                variant="outlined"
                color="primary"
                onPress={handleCreateAccount}
                style={styles.createAccountButton}
            />

            <View style={styles.socials}>
                <Text>Or continue with:</Text>
                <View style={styles.socialIconsContainer}>
                    <SocialLoginButton
                        name="logo-google"
                        backgroundColor="#db4437"
                        onPress={() => Alert.alert("Google login", "Google login process initiated.")}
                    />
                    <SocialLoginButton
                        name="logo-instagram"
                        backgroundColor="#C13584"
                        onPress={() => Alert.alert("Instagram login", "Instagram login process initiated.")}
                    />
                    <SocialLoginButton
                        name="logo-facebook"
                        backgroundColor="#4267B2"
                        onPress={() => Alert.alert("Facebook login", "Facebook login process initiated.")}
                    />
                    {/*<Icon name="facebook"  />*/}
                </View>

            </View>


        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 40,
    },
    headerContainer: {
        alignItems: "center",
    },
    headerText: {
        color: colors.primary.main,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        fontSize: 30,
    },
    descriptionText: {
        fontSize: 20,
        textAlign: "center",
        marginHorizontal: 40,
        fontWeight: "600",
        marginBottom: 30,
    },
    forgotPasswordContainer: {
        alignSelf: "flex-end",
    },
    forgotPasswordText: {
        color: colors.primary.main,
        fontSize: 14,
        fontWeight: "semibold",
    },
    signInButton: {
        marginTop: 20,
        width: "100%",
    },
    createAccountButton: {
        marginTop: 15,
        width: "100%",
    },
    socialIconsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
    },
    iconStyle: {
        marginRight: 0,
    },
    socials: {
        marginTop: 20,
       flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

});
