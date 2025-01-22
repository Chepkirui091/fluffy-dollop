import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from "../../../theme/colors";

const PromoBanner = () => {
    return (
        <View style={styles.bannerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>30% OFF</Text>
                <Text style={styles.subText}>Black Friday Deal</Text>
                <Text style={styles.offerText}>Get discount for every topup, transfer, and payment</Text>
            </View>

            {/* Diagonal Square with #0% */}<View style={styles.diagonalSquare}>
            <Text style={styles.diagonalText}>30%</Text>
            <View style={styles.pinnedCircle} />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#264963',
        padding: 20,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    textContainer: {
        flex: 1,
        marginRight: 20,
    },
    mainText: {
        fontSize: 8.98,
        fontWeight: 'bold',
        color: colors.white.main,
    },
    subText: {
        fontSize: 12.82,
        fontWeight: 'bold',
        color: colors.white.main,
        marginVertical: 5,
    },
    offerText: {
        fontSize: 10,
        color: colors.white.main,
    },
    diagonalSquareContainer: {
        position: 'relative',
        alignItems: 'center',
    },
    diagonalSquare: {
        width: 80,
        height: 70,
        borderRadius: 10,
        backgroundColor: colors.secondary.main,
        transform: [{ rotate: '45deg' }],
        justifyContent: 'center',
        alignItems: 'center',
        top:20,
        left:35,
        // zIndex: 1,
    },
    diagonalText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        transform: [{ rotate: '-45deg' }],
    },
    pinnedCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: '#ffa366',
        position: 'absolute',
        top: -5, // Move circle to top tip
        left: '50%', // Center horizontally relative to the square
        transform: [{ translateX: -45 }], // Offset for perfect centering

    },
});

export default PromoBanner;
