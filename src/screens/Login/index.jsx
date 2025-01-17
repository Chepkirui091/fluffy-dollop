import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../../components/input";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../components/Button";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForgotPassword = () => {
        Alert.alert("Forgot Password", "Password recovery link will be sent to your email.");
    };

    const handleSignIn = () => {
        Alert.alert("Sign In", "Sign In process triggered");
    };

    const handleGoogleLogin = () => {
        Alert.alert("Google Login", "Google login process initiated.");
    };

    const handleInstagramLogin = () => {
        Alert.alert("Instagram Login", "Instagram login process initiated.");
    };

    const handleFacebookLogin = () => {
        Alert.alert("Facebook Login", "Facebook login process initiated.");
    };

    const handleCreateAccount = () => {
        Alert.alert("Create Account", "Navigate to Create Account Screen.");
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
                <Button
                    title="Forgot Password?"
                    variant="text"
                    color="primary"
                    onPress={handleForgotPassword}
                    style={styles.forgotPasswordText}
                />
            </View>

            <Button
                title="Sign In"
                variant="contained"
                color="primary"
                onPress={handleSignIn}
                style={styles.signInButton}
            />

            <Button
                title="Create a new account"
                variant="outlined"
                color="primary"
                onPress={handleCreateAccount}
                style={styles.createAccountButton}
            />

            <View style={styles.socialButtonsContainer}>
                <Button
                    title="Google"
                    variant="contained"
                    color="google"
                    onPress={handleGoogleLogin}
                    icon={<Icon name="google" size={20} color="#fff" />}
                    style={styles.iconButton}
                />
                <Button
                    title="Instagram"
                    variant="contained"
                    color="instagram"
                    onPress={handleInstagramLogin}
                    icon={<Icon name="instagram" size={20} color="#fff" />}
                    style={styles.iconButton}
                />
                <Button
                    title="Facebook"
                    variant="contained"
                    color="facebook"
                    onPress={handleFacebookLogin}
                    icon={<Icon name="facebook" size={20} color="#fff" />}
                    style={styles.iconButton}
                />
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 40,
    },
    headerContainer: {
        alignItems: "center",
    },
    headerText: {
        color: colors.primary,
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
        // marginBottom: 10,
    },
    forgotPasswordText: {
        color: colors.primary,
        // textDecorationLine: "underline",
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
    socialButtonsContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    iconButton: {
        flex: 1,
        marginHorizontal: 5,
        justifyContent: "center",
    },
});
