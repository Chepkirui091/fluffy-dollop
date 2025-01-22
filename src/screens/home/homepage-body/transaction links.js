import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../theme/colors";
import PromoBannerSlider from "./promo-slider";

const images = [
    "https://www.shutterstock.com/shutterstock/photos/2213206619/display_1500/stock-vector-mega-sale-special-offer-stage-podium-percent-stage-podium-scene-with-for-award-decor-element-2213206619.jpg",
"https://www.shutterstock.com/shutterstock/photos/2213206619/display_1500/stock-vector-mega-sale-special-offer-stage-podium-percent-stage-podium-scene-with-for-award-decor-element-2213206619.jpg"
];

const TransactionLinks = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Quick Actions</Text>
            <View style={styles.container}>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/send_money.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Send Money</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/paymerchant.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Pay Merchant</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/withdraw.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Withdraw</Text>
                </View>
            </View>
            <Text style={styles.titleText}>Transactions</Text>
            <View style={styles.container}>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/send_money.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Send Money</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/paymerchant.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Pay Merchant</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/withdraw.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Withdraw</Text>
                </View>
            </View>
            <Text style={styles.titleText}>Transactions</Text>
            <View style={styles.container}>
                <PromoBannerSlider images={images} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        width:345,
    },
    ellipse: {
        width: 48,
        height: 48,
        borderRadius: 30,
        backgroundColor: colors.primary.dark,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 32,
        height: 32,
    },
    ellipseContainer: {
        backgroundColor: colors.white.main,
        borderRadius: 8,
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        elevation:4,
        marginHorizontal: 8,
    },
    actionText: {
        color: colors.primary.main,
        fontWeight: 600,
        fontSize: 12,
        marginTop: 8,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.text.main,
    },
    mainContainer: {

    }
});

export default TransactionLinks;
