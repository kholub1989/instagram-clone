import React, { Component } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import LandingScreen from "./components/auth/Londing";
import RegisterScreen from "./components/auth/Register";
import MainScreen from "./components/Main";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

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

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
