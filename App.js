import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import * as firebase from "firebase";
import firebase from "firebase/app";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

// For experimental purpose
const firebaseConfig = {
  apiKey: "AIzaSyDay9rk6ga6YJGLmKv7nwBTBaCuq6AWaVk",
  authDomain: "instagramdb-c09b5.firebaseapp.com",
  projectId: "instagramdb-c09b5",
  storageBucket: "instagramdb-c09b5.appspot.com",
  messagingSenderId: "679416068826",
  appId: "1:679416068826:web:c0417ed55e47bcc4aa83e3",
  measurementId: "G-LDT1CFQP68",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
