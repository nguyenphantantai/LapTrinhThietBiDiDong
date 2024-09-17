import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { RadialGradient } from "react-native-svg";

interface CheckBoxComponentProps {
  title: string;
}

const CheckBoxComponent: React.FC<CheckBoxComponentProps> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginVertical: 10,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
        {title}
      </Text>
      {/* <View style={{ width: 30, height: 30 }}> */}
      <Checkbox
        status={isChecked ? "checked" : "unchecked"}
        onPress={() => setIsChecked(!isChecked)}
        color="white"
      />
      {/* </View> */}
    </View>
  );
};
const title = [
  {
    title: "Include lower case letters",
  },
  {
    title: "Include upcase letters",
  },
  {
    title: "Include number",
  },
  {
    title: "Include special symbols",
  },
];
export default function HaiC() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <LinearGradient
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
      colors={["#3B3B98", "#C4C4C400"]}
    >
      <View
        style={{
          backgroundColor: "#23235B",
          shadowColor: "#000 25%",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          padding: 20,
          borderRadius: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              fontWeight: "700",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            PASSWORD GENERATOR
          </Text>
        </View>

        <TextInput
          style={{
            backgroundColor: "#151537",
            borderRadius: 5,
            padding: 10,
            marginVertical: 20,
            width: "100%",
            color: "white",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 10,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
              Password Length
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                // width: "100%",
                width: 100,
              }}
            />
          </View>
          {title.map((item, index) => (
            <CheckBoxComponent title={item.title} key={index} />
          ))}
        </View>
        <View>
          <Button
            uppercase
            style={{ backgroundColor: "#3B3B98", borderRadius: 5 }}
            contentStyle={{}}
            labelStyle={{ color: "white" }}
            onPress={() => {
              navigation.navigate("HaiD");
            }}
          >
            Generate Password
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
}
