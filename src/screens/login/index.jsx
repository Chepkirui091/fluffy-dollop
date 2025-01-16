import {View, Text, StyleSheet} from "react-native";

const LoginScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Login Here</Text>
            </View>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    headerText: {
        color: "#1F41BB",
        textAlign: "center",
        fontSize: 40,
    },
    headerContainer: undefined
})