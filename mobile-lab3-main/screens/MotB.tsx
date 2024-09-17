import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../GlobalStyle";
import { TextInput } from "react-native-paper";
import { Pressable } from "react-native-paper/lib/typescript/components/TouchableRipple/Pressable";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function MotB() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={GlobalStyles.container}
    >
      <Image source={require("../assets/lock.png")} style={styles.tinyLogo} />

      <Text style={GlobalStyles.title}>FORGET</Text>
      <Text style={GlobalStyles.title}>PASSWORD</Text>
      <Text style={GlobalStyles.subtitle}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 15,
            paddingHorizontal: 10,
            backgroundColor: "#C4C4C4",
          }}
          placeholder="Email"
          placeholderTextColor="black"
          textColor="black"
          left={<TextInput.Icon icon="email" color={"black"} />}
        />
        <TouchableOpacity
          style={[GlobalStyles.button, { width: "100%" }]}
          onPress={() => {
            navigation.navigate("MotC");
          }}
        >
          <Text style={GlobalStyles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 99,
    height: 112,
  },
});
