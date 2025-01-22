import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PromoBannerSlider = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const activeIndex = Math.round(scrollPosition / width);
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
                    <FlatList
                        data={images}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={onScroll}
                        scrollEventThrottle={16}
                    />
                    <View style={styles.indicatorContainer}>
                        {images.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.indicator,
                                    currentIndex === index && styles.activeIndicator,
                                ]}
                            />
                        ))}
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
        position: 'relative',
        // marginVertical: 20,
    },
    imageContainer: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        // resizeMode: 'cover',
        borderRadius: 10,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: '#ff6600',
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
    },
});

export default PromoBannerSlider;
