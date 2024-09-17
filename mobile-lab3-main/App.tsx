import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import FirstScreen from "./screens/FirstScreen";
import MOtA from "./screens/MotA";
import MotB from "./screens/MotB";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MotC from "./screens/MotC";
import MotD from "./screens/MotD";
import MotE from "./screens/MotE";

const RootStack = createNativeStackNavigator({
  screens: {
    FirstScreen: FirstScreen,
    MotA: MOtA,
    MotB: MotB,
    MotC: MotC,
    MotD: MotD,
    MotE: MotE,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
