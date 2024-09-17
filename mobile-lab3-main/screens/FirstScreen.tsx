import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import {
  NavigationContainerProps,
  NavigationProp,
  useNavigation,
  ParamListBase,
} from "@react-navigation/native";
import GlobalStyles from "../GlobalStyle";

const FirstScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={[GlobalStyles.container, styles.containerColor]}>
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
            navigation.navigate("MotD");
          }}
        >
          <Text style={GlobalStyles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => {
            navigation.navigate("MotE");
          }}
        >
          <Text style={GlobalStyles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <Pressable
        style={GlobalStyles.button}
        onPress={() => {
          navigation.navigate("MotA");
        }}
      >
        <Text style={GlobalStyles.buttonText}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerColor: {
    backgroundColor: "#2196F3", // Màu xanh dương từ hình ảnh
  },
  circle: {
    width: 100, // Điều chỉnh kích thước theo ý muốn
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    marginBottom: 30,
  },
});

export default FirstScreen;
