import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/login";
import LandingScreen from "./src/screens/landing-page";
import SignUpScreen from "./src/screens/signup";
import {ROUTES} from "./src/constants";
import {HomeScreen} from "./src/screens/home";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ ROUTES.LANDING_SCREEN} component={LandingScreen} />
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
          <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
          <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}