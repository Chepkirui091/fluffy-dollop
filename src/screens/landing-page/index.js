import {View, Text, StyleSheet, Image, Button} from "react-native";

const LandingScreen = () => {
    let loginButton = "Login";
    let sinUpButton = "Sign Up";
    return (
        <View style={styles.container} >
            <View style={styles.headerContainer}>
                <View style={styles.ImageContainer}>
                    <Image style={styles.LandingImage} source={require('../../assets/landing.png')} />
                </View>
                <Text style={styles.headerText}>Discover Your Dream Job here</Text>
                <Text style={styles.descriptionText}>Explore all the existing job roles based on your interest and study major</Text>
                <View style={styles.landingButtons}>
                    <Button title={loginButton} style={styles.loginButton}  />
                    <Button title={sinUpButton} style={styles.signUpButton}  />

                </View>
            </View>
        </View>
    )
}

export default LandingScreen


const styles = StyleSheet.create({
    headerText: {
        color: "#1F41BB",
        textAlign: "center",
        fontSize: 35,
        // paddingHorizontal: 80,
        fontWeight: "semiBold",
        marginHorizontal: 40,
    },
    ImageContainer: {
        justifyContent: "center",
    },
    LandingImage: {
        width: 365,
        height: 370,

    },
    headerContainer: undefined,
    descriptionText: {
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20,
    },
    landingButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})