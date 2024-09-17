import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GlobalStyles from "../GlobalStyle";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useState } from "react";

export default function MotC() {
  const [value, setValue] = useState<string>("");
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={GlobalStyles.container}
    >
      <Text style={{ fontSize: 60, fontWeight: "bold", marginBottom: 40 }}>
        CODE
      </Text>
      <Text style={GlobalStyles.title}>VERIFICATION</Text>
      <Text style={GlobalStyles.subtitle}>
        Enter ontime password sent on ++849092605798
      </Text>
      <View style={{ alignItems: "center", width: "80%" }}>
        {/* confirm input text using react-native-confirmation-code-field, include 6 columns */}
        <CodeField
          value={value}
          onChangeText={setValue}
          cellCount={6}
          rootStyle={{ marginBottom: 20 }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={(
            { index, symbol, isFocused } // symbol is the value of each cell
          ) => (
            <View
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
                {/* if symbol is null, show cursor */}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={[GlobalStyles.button, { width: "100%" }]}
          onPress={() => {
            navigation.navigate("MotD");
          }}
        >
          <Text style={GlobalStyles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    // marginHorizontal: 10,
  },
  focusCell: {
    borderColor: "#000",
  },
  cellText: {
    color: "#000",
    textAlign: "center",
    fontSize: 24,
  },
});
