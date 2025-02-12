import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeScreen } from '../screens/home';
import Wallet from "../screens/wallet";

const Tab = createBottomTabNavigator();

const WalletScreen = () => <PlaceholderScreen title="Wallet" />;
const TransactionsScreen = () => <PlaceholderScreen title="Transactions" />;
const QRCodeScreen = () => <PlaceholderScreen title="QR Code" />;
const AccountScreen = () => <PlaceholderScreen title="My Account" />;

const PlaceholderScreen = ({ title }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
    </View>
);

const FloatingButton = ({ onPress }) => (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
        <Icon name="home" size={28} color="#fff" />
    </TouchableOpacity>
);

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Wallet':
                            iconName = focused ? 'wallet' : 'wallet-outline';
                            break;
                        case 'Transactions':
                            iconName = 'swap-horizontal';
                            break;
                        case 'QR Code':
                            iconName = focused ? 'qrcode' : 'qrcode-scan';
                            break;
                        case 'My Account':
                            iconName = focused ? 'account' : 'account-outline';
                            break;
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#103D61',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    elevation: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
            })}
        >
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarButton: (props) => <FloatingButton {...props} />,
                }}
            />
            <Tab.Screen name="QR Code" component={QRCodeScreen} />
            <Tab.Screen name="My Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
    floatingButton: {
        backgroundColor: '#103D61',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        borderWidth: 4,
        borderColor: '#fff',
    },

});
