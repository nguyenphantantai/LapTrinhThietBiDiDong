import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyle";

const MOtA = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={GlobalStyles.container}
    >
      <View style={styles.circle}></View>
      <Text style={GlobalStyles.title}>GROW</Text>
      <Text style={GlobalStyles.title}>YOUR BUSINESS</Text>
      <Text style={GlobalStyles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {
            navigation.navigate("Login 2a");
          }}
        >
          <Text style={GlobalStyles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Pressable
        style={GlobalStyles.button}
        onPress={() => {
          navigation.navigate("MotB");
        }}
      >
        <Text style={GlobalStyles.buttonText}>Next</Text>
      </Pressable>
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
        How we work?
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100, // Điều chỉnh kích thước theo ý muốn
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    marginBottom: 30,
  },
});
export default MOtA;
