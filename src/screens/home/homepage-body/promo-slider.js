import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    Animated,
} from "react-native";
import colors from "../../../theme/colors";

const { width } = Dimensions.get("window");

const PromoBannerSlider = ({ images = [], autoScrollInterval = 5000 }) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null); // Reference to FlatList
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (images.length > 0) {
                const nextIndex = (currentIndex + 1) % images.length;
                flatListRef.current?.scrollToOffset({
                    offset: nextIndex * width,
                    animated: true,
                });
                setCurrentIndex(nextIndex);
            }
        }, autoScrollInterval);

        return () => clearInterval(interval); // Clean up the timer
    }, [currentIndex, images.length, autoScrollInterval]);

    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const onScrollEnd = (event) => {
        const activeIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(activeIndex);
    };

    const renderImage = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            {images.length > 0 ? (
                <>
                    <Animated.FlatList
                        ref={flatListRef}
                        data={images}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={onScroll}
                        onMomentumScrollEnd={onScrollEnd}
                        scrollEventThrottle={16}
                    />
                    <View style={styles.indicatorContainer}>
                        {images.map((_, index) => {
                            const inputRange = [
                                (index - 1) * width,
                                index * width,
                                (index + 1) * width,
                            ];
                            const scale = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.8, 1.2, 0.8],
                                extrapolate: "clamp",
                            });
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.5, 1, 0.5],
                                extrapolate: "clamp",
                            });

                            return (
                                <Animated.View
                                    key={index}
                                    style={[
                                        styles.indicator,
                                        { transform: [{ scale }], opacity },
                                    ]}
                                />
                            );
                        })}
                    </View>
                </>
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyText}>No promos available</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10,
        width: "100%",
        // backgroundColor:"black"
    },
    imageContainer: {
        width,
        alignItems: "flex-start",
       justifyContent: "center",
        // marginRight:-40
       //  gap:20
    },
    image: {
        width: "76%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
    },
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.secondary.main,
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: "#ff6600",
    },
    emptyState: {
        alignItems: "center",
        justifyContent: "center",
        height: 200,
    },
    emptyText: {
        fontSize: 16,
        color: "#888",
    },
});

export default PromoBannerSlider;
