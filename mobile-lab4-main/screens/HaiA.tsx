import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Formik, FormikProps } from "formik";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import * as Yup from "yup";
export default function HaiA() {
  const [isVisible, setIsVisible] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
      colors={["#FBCB00", "#BF9A00"]}
    >
      {/* Title */}
      <View
        style={{
          alignSelf: "flex-start",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 32 }}>LOGIN</Text>
      </View>
      <Formik
        initialValues={{ name: "q", password: "q" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => {
          navigation.navigate("HaiB");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }: FormikProps<{ name: string; password: string }>) => (
          <View
            style={{
              gap: 10,
              alignItems: "center",
              //   height: 150,
              width: "100%",
              flex: 2,
            }}
          >
            <View style={{ width: "100%" }}>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={[styles.borderInput, { width: "100%" }]}
                // contentStyle={{ color: "black" }}
                placeholder="name"
                placeholderTextColor={"black"}
                outlineColor="#F2F2F2"
                activeOutlineColor="black"
                left={
                  <TextInput.Icon icon="account" color={"black"} size={36} />
                }
              />
              {touched.name && errors.name && (
                <HelperText
                  type="error"
                  visible={true}
                  style={{ color: "red" }}
                >
                  {errors.name}
                </HelperText>
              )}
            </View>
            <View style={{ width: "100%" }}>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={{ backgroundColor: "#C4C4C44D", width: "100%" }}
                contentStyle={{ color: "black" }}
                placeholder="Password"
                placeholderTextColor={"black"}
                secureTextEntry={!isVisible}
                outlineColor="#F2F2F2"
                activeOutlineColor="black"
                right={
                  <TextInput.Icon
                    icon={isVisible ? "eye-off" : "eye"}
                    color={"black"}
                    onPress={() => setIsVisible(!isVisible)}
                    size={36}
                  />
                }
                left={<TextInput.Icon icon="lock" color={"black"} size={36} />}
              />
              {touched.password && errors.password && (
                <HelperText
                  type="error"
                  visible={true}
                  style={{ color: "red" }}
                >
                  {errors.password}
                </HelperText>
              )}
            </View>

            <TouchableOpacity
              style={[
                {
                  backgroundColor: "black",
                  width: "100%",
                  marginVertical: 40,
                  paddingVertical: 12,
                  borderRadius: 10,
                },
              ]}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text
                style={[{ color: "white", alignSelf: "center", fontSize: 18 }]}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Forgot your password?
            </Text>
          </View>
        )}
      </Formik>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  borderInput: {
    // borderWidth: 1,
    backgroundColor: "#C4C4C44D",
  },
});
