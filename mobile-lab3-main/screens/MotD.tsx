import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import GlobalStyles from "../GlobalStyle";
import { HelperText, TextInput } from "react-native-paper";
import { useState } from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

interface FormValues {
  email: string;
  password: string;
}
export default function MotD() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={[GlobalStyles.container, { backgroundColor: "#d8eede" }]}>
      <Text style={[GlobalStyles.title, { marginBottom: 50 }]}> LOGIN </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }: FormikProps<FormValues>) => (
          <View
            style={{
              gap: 10,
              alignItems: "center",
              //   height: 150,
              width: "100%",
            }}
          >
            <View style={{ width: "100%" }}>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={{
                  backgroundColor: "#C4C4C44D",
                  width: "100%",
                }}
                contentStyle={{ color: "black" }}
                placeholder="Email"
                placeholderTextColor={"black"}
                outlineColor="black"
                activeOutlineColor="black"
              />
              {touched.email && errors.email && (
                <HelperText
                  type="error"
                  visible={true}
                  style={{ color: "red" }}
                >
                  {errors.email}
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
                outlineColor="black"
                activeOutlineColor="black"
                right={
                  <TextInput.Icon
                    icon={isVisible ? "eye-off" : "eye"}
                    color={"black"}
                    onPress={() => setIsVisible(!isVisible)}
                  />
                }
              />
            </View>
            {touched.password && errors.password && (
              <HelperText type="error" visible={true} style={{ color: "red" }}>
                {errors.password}
              </HelperText>
            )}
            <TouchableOpacity
              style={[
                GlobalStyles.button,
                { backgroundColor: "#E53935", width: "100%" },
              ]}
              onPress={() => {
                handleSubmit();
                navigation.navigate("MotE");
              }}
            >
              <Text
                style={[GlobalStyles.buttonText, { color: "white" }]}
                onPress={() => {
                  navigation.navigate("MotE");
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View
        style={{
          marginTop: 40,
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>When you agree to terms and conditions</Text>
        <Text
          style={{ color: "#5D25FA" }}
          onPress={() => {
            navigation.navigate("MotB");
          }}
        >
          For got your password?
        </Text>
        <Text>Or login with</Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <TouchableOpacity
            style={[
              GlobalStyles.button,
              {
                backgroundColor: "#3B5998",
                marginHorizontal: 0,
                width: 100,
              },
            ]}
          >
            <Text style={[GlobalStyles.buttonText, { color: "white" }]}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GlobalStyles.button,
              {
                backgroundColor: "#DB4437",
                marginHorizontal: 0,
                width: 100,
              },
            ]}
          >
            <Text style={[GlobalStyles.buttonText, { color: "white" }]}>Z</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              GlobalStyles.button,
              {
                backgroundColor: "transparent",
                marginHorizontal: 0,
                borderColor: "black",
                borderWidth: 1,
                width: 100,
              },
            ]}
          >
            <Text style={[GlobalStyles.buttonText, { color: "white" }]}>G</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
