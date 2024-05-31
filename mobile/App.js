import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import NaturalScreen from "./screens/NaturalScreen";
import CulturalScreen from "./screens/CulturalScreen";
import AdventureScreen from "./screens/AdventureScreen";
import EventScreen from "./screens/EventScreen";
import Colors from "./constants/colors";
import PlaceScreen from "./screens/PlaceScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ContactFormScreen from "./screens/ContactFormScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PaymentDetailsScreen from "./screens/PaymentDetailsScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.red100 },
            headerTintColor: Colors.pink100,
            contentStyle: { backgroundColor: Colors.white100 },
            headerTitleAlign: "left",
            headerTitleStyle: { fontSize: 17 },
          }}
        >
          <Stack.Screen
            name="All"
            component={HomeScreen}
            options={{
              title: "Eazeae",
            }}
          />
          <Stack.Screen
            name="Natural"
            component={NaturalScreen}
            options={{
              title: "Natural",
            }}
          />
          <Stack.Screen
            name="PS"
            component={PaymentScreen}
            options={{
              title: "Payment Methods",
            }}
          />
          <Stack.Screen
            name="Cultural"
            component={CulturalScreen}
            options={{
              title: "Cultural",
            }}
          />
          <Stack.Screen
            name="PDS"
            component={PaymentDetailsScreen}
            options={{
              title: "Ticket Details",
            }}
          />
          <Stack.Screen
            name="Adventure"
            component={AdventureScreen}
            options={{
              title: "Adventure",
            }}
          />
          <Stack.Screen
            name="Events"
            component={EventScreen}
            options={{
              title: "Events",
            }}
          />
          <Stack.Screen
            name="Place"
            component={PlaceScreen}
            options={{
              title: "Place",
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Login",
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              title: "Register",
            }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactFormScreen}
            options={{
              title: "Contact Form",
            }}
          />
        </Stack.Navigator>
        {/* <BottomTab /> */}
      </NavigationContainer>
    </>
  );
}
