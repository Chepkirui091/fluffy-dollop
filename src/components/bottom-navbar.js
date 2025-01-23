import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import {HomeScreen} from "../screens/home";

const Tab = createBottomTabNavigator();

const WalletScreen = () => <PlaceholderScreen title="Wallet" />;
const TransactionsScreen = () => <PlaceholderScreen title="Transactions" />;
// const HomeScreen = () => <PlaceholderScreen title="Home" />;
const QRCodeScreen = () => <PlaceholderScreen title="QR Code" />;
const AccountScreen = () => <PlaceholderScreen title="My Account" />;

const PlaceholderScreen = ({ title }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
    </View>
);

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Wallet':
                            iconName = focused ? 'wallet' : 'wallet-outline';
                            break;
                        case 'Transactions':
                            iconName = 'swap-horizontal'; // Use same icon for both states
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
                tabBarActiveTintColor: '#003c8f',
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
            <Tab.Screen name="Wallet" component={HomeScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="QR Code" component={QRCodeScreen} />
            <Tab.Screen name="My Account" component={AccountScreen} />
        </Tab.Navigator>
    );
};

export default BottomNavigationBar;
