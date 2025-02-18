import {Text, View, TouchableOpacity, Pressable} from "react-native";
import React, {useState} from "react";
import colors from "../../theme/colors";
import {runOnJS, useSharedValue, withTiming} from "react-native-reanimated";

const TabButton = ({buttons, selectedTab, setSelectedTab}) => {

    const [dimensions, setDimensions] = useState({height: 20, width: 100});
    const buttonWidth = dimensions.width / buttons.length;
    const tabPositionX = useSharedValue(0);

    const onTabListLayout = (e) => {
        setDimensions({
            height: e.nativeEvent.layout.height,
            width: e.nativeEvent.layout.width,
        })
    }

    const handlePress = (index) => {
        setSelectedTab(index);
    }

    const OnTabPress = (index) => {
        tabPositionX.value = withTiming(buttonWidth * index, {}, () =>{
            runOnJS(handlePress) (index);
        });
    }
    return (
        <View style={{
            backgroundColor: colors.secondary.main,
            borderRadius: 20,
            justifyContent: "center"
        }}
              accessibilityRole="tablist"

        >
            <Animated.View style={{
                position: 'absolute',
                backgroundColor: '#fff',
                borderRadius: 15,
                marginHorizontal: 5,
                height: dimensions.height - 10,
                width: buttonWidth - 10,
                left: buttonWidth * selectedTab,
            }}/>
            <View onLayout={onTabListLayout} style={{flexDirection: "row"}}>
                {buttons.map((button, index) => {

                    const color = selectedTab === index ? colors.secondary.main : '#fff';
                    return (
                        <TouchableOpacity key={index}
                                          style={{flex: 1, paddingVertical: 20}}
                                          onPress={() => OnTabPress(index)}>
                            <Text style={{color: color, alignSelf: 'center', fontSize: 14}}>{button.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
};

export default TabButton;
