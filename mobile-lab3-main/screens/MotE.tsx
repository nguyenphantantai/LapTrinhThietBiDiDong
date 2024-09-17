import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../GlobalStyle";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { HelperText, TextInput } from "react-native-paper";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useState } from "react";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  password: string;
  birthday: string;
};
export default function MotE() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={[GlobalStyles.container, { backgroundColor: "#d8eede" }]}>
      <Text style={[GlobalStyles.title, { marginBottom: 20 }]}> REGISTER </Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          phone: "",
          birthday: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required(),
          name: Yup.string().required(),
          phone: Yup.string().required(),
          birthday: Yup.string().required(),
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
              gap: 5,
              alignItems: "center",
              //   height: 150,
              width: "100%",
            }}
          >
            <View style={{ width: "100%" }}>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.email}
                style={{
                  backgroundColor: "#C4C4C44D",
                  width: "100%",
                }}
                contentStyle={{ color: "black" }}
                placeholder="Name"
                placeholderTextColor={"black"}
                outlineColor="black"
                activeOutlineColor="black"
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
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                style={{
                  backgroundColor: "#C4C4C44D",
                  width: "100%",
                }}
                contentStyle={{ color: "black" }}
                placeholder="Phone"
                placeholderTextColor={"black"}
                outlineColor="black"
                activeOutlineColor="black"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
              />
              {touched.phone && errors.phone && (
                <HelperText
                  type="error"
                  visible={true}
                  style={{ color: "red" }}
                >
                  {errors.phone}
                </HelperText>
              )}
            </View>
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
            <View style={{ width: "100%" }}>
              <TextInput
                mode="outlined"
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                value={values.birthday}
                style={{
                  backgroundColor: "#C4C4C44D",
                  width: "100%",
                }}
                contentStyle={{ color: "black" }}
                placeholder="Birthday"
                placeholderTextColor={"black"}
                outlineColor="black"
                activeOutlineColor="black"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
              />
              {touched.birthday && errors.birthday && (
                <HelperText
                  type="error"
                  visible={true}
                  style={{ color: "red" }}
                >
                  {errors.birthday}
                </HelperText>
              )}
            </View>
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
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text style={[{ marginTop: 20 }]}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
}
