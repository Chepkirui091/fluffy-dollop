import React, { useState } from "react";
import { StyleSheet, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TopNav from "./topNav";
import HomepageBody from "./homepage-body";


export const HomeScreen = () => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );

    const greetingsOpacity = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const greetingsTranslate = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [0, -50],
        extrapolate: "clamp",
    });

    return (
        <LinearGradient
            colors={["#001F37", "#00589D"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <TopNav scrollY={scrollY} />
            <Animated.View
                style={[
                    styles.greetingsContainer,
                    {
                        opacity: greetingsOpacity,
                        transform: [{ translateY: greetingsTranslate }],
                    },
                ]}
            >
                <TopNav.Greetings />
            </Animated.View>
            <Animated.ScrollView
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollContent}
            >
                <HomepageBody />
            </Animated.ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greetingsContainer: {
        position: "absolute",
        top: 53, // Below the sticky header
        left: 0,
        right: 0,
        zIndex: 5,
    },
    scrollContent: {
        flexGrow: 1,
        paddingTop: 150, // Space for hidden greetings
    },
});
