import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import Input from "../../components/input";
import colors from "../../theme/colors";
import Icon from "react-native-vector-icons/Ionicons";
import DMTButton from "../../components/Button";
import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "../../constants";

const SocialLoginButton = ({name, backgroundColor, onPress}) => (
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

const SignUpScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigation = useNavigation();

    const handleSignUp = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Error", "Please fill in all fields.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        Alert.alert("Success", "Sign-Up process triggered.");
    };

    const handleOnLogin = () => {
        navigation.navigate(ROUTES.LOGIN)
    };
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Create Account</Text>
                    <Text style={styles.descriptionText}>
                        Create an account so you can explore all the{'\n'} existing jobs
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
                <Input
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <DMTButton
                    title="Sign up"
                    variant="contained"
                    color="primary"
                    onPress={handleSignUp}
                    style={styles.signInButton}
                />

                <DMTButton
                    title="Already have an account"
                    variant="outlined"
                    color="primary"
                    onPress={handleOnLogin}
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

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
    socialButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
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

export default SignUpScreen;
