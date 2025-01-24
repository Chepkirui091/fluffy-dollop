import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../theme/colors";
import PromoBannerSlider from "./promo-slider";

const images = [
    "https://img.freepik.com/free-vector/black-friday-sale-modern-banner-with-text-soace_1017-34852.jpg?t=st=1737534235~exp=1737537835~hmac=947d3b84ba77aa1ebc9ede8873a7aa937b9f20e6cf43c85afd0d44b8bf6941e3&w=1380",
    "https://www.shutterstock.com/shutterstock/photos/2213206619/display_1500/stock-vector-mega-sale-special-offer-stage-podium-percent-stage-podium-scene-with-for-award-decor-element-2213206619.jpg",
    "https://img.freepik.com/free-vector/elegant-black-friday-sale-banner-layout-template_1035-17445.jpg?t=st=1737533844~exp=1737537444~hmac=8b733b7340ce13c53e930d2f2b17be9efbd49ded2edbf72492a7c1171e99fa70&w=1380",

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
            <Text style={styles.titleText}>Promo & Discount</Text>
            <View style={styles.container}>
                <PromoBannerSlider images={images} />
            </View>

            <Text style={styles.titleText}>Payments</Text>
            <View style={styles.container}>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/payments.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Pay Bills</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/airtime.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Airtime Top Up</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/request_money.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Request Money</Text>
                </View>
            </View>
            <Text style={styles.titleText}>Others</Text>
            <View style={styles.container}>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/banks.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Other Banks</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/settings.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Settings</Text>
                </View>
                <View style={styles.ellipseContainer}>
                    <View style={styles.ellipse}>
                        <Image source={require('../../../assets/esahal/e-float_balance.png')} style={styles.icon} />
                    </View>
                    <Text style={styles.actionText}>Etce Tera</Text>
                </View>
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
