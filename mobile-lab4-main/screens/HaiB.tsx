import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, View, TextInput } from "react-native";
import { Button, Icon } from "react-native-paper";
import StarRating from "react-native-star-rating-widget";

export default function HaiB() {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={{ padding: 40 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../assets/usb.png")}
          style={{ width: 70, height: 70 }}
        />
        <Text style={{ width: "100%", fontWeight: "bold", flex: 1 }}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 70,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Cực kì hài lòng
        </Text>
        {/* <Star */}
        <StarRating
          rating={rating}
          onChange={setRating}
          starSize={30}
          starStyle={{ margin: 5 }}
          style={{ marginVertical: 12 }}
        />
        <Button
          icon={() => <Icon source="camera" size={34} color="black" />}
          style={{
            width: "100%",
            borderColor: "#1511EB",
            borderRadius: 5,
            padding: 8,
          }}
          mode="outlined"
        >
          Thêm hình ảnh
        </Button>
        <TextInput
          // label="Đánh giá"
          value={text}
          onChangeText={setText}
          multiline
          // numberOfLines={5}
          style={{
            height: 200,
            width: "100%",
            textAlignVertical: "top",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            marginVertical: 12,
            padding: 8,
          }}
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
        />
        <Button
          mode="contained"
          uppercase
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("HaiC");
          }}
        >
          Gửi
        </Button>
      </View>
    </View>
  );
}
