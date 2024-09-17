import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Icon, IconButton } from "react-native-paper";

interface ProductControlProps {
  onTotalPriceChange: (price: number) => void;
}
const ProductControl: React.FC<ProductControlProps> = ({
  onTotalPriceChange,
}) => {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 100; // Giá mỗi sản phẩm
  const totalPrice = quantity * pricePerUnit;
  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <IconButton
          icon={"minus"}
          onPress={decreaseQuantity}
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
          }}
          iconColor="#000000"
          size={8}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <IconButton
          icon={"plus"}
          onPress={increaseQuantity}
          style={{
            backgroundColor: "#C4C4C4",
            borderRadius: 5,
          }}
          iconColor="#000000"
          size={8}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // alignItems: "center",
  },
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
  },
  quantity: {
    fontSize: 15,
    marginHorizontal: 10,
  },
});
export default function HaiD() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const handleTotalPriceChange = (price: number) => {
    setTotalPrice(price);
  };
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#C4C4C4",
        // width: "100%",
      }}
    >
      <View style={{ flex: 5 }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            gap: 10,
            padding: 10,
            backgroundColor: "#FFFFFF",
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          <Image
            source={require("../assets/book.png")}
            style={{ width: 110, height: 130 }}
          />
          <View style={{ flexShrink: 1, gap: 10 }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#000000",

                width: "100%",
              }}
            >
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {totalPrice}đ
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#808080",
                fontWeight: "bold",
                textDecorationLine: "line-through",
              }}
            >
              141.800đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <ProductControl onTotalPriceChange={handleTotalPriceChange} />
              <Text style={{ color: "#134FEC", fontSize: 12, fontWeight: 700 }}>
                Mua sau
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Mã giảm giá đã lưu
          </Text>
          <View style={{ flexGrow: 1 }}>
            <Text
              style={{
                color: "#134FEC",
                fontSize: 12,
                fontWeight: 700,
                textAlign: "right",
              }}
            >
              Xem tại đây
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Button
            icon={() => <Icon source="tag" size={20} color="yellow" />}
            mode="outlined"
            style={{ borderRadius: 0 }}
            labelStyle={{ color: "black", fontSize: 20, fontWeight: "bold" }}
          >
            Mã giảm giá
          </Button>
          <Button
            mode="contained"
            style={{ borderRadius: 0, backgroundColor: "#0A5EB7" }}
            labelStyle={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
          >
            Áp dụng
          </Button>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
          backgroundColor: "#fff",
          marginVertical: 10,
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{ color: "#134FEC", fontSize: 12, fontWeight: 700 }}>
          Nhập tại đây?
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Tạm tính
          </Text>
          <Text
            style={{
              color: "red",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {totalPrice}đ
          </Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ backgroundColor: "#fff", padding: 10, flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#808080",
              }}
            >
              Thành tiền
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {totalPrice}đ
            </Text>
          </View>
          <Button
            mode="contained"
            style={{
              borderRadius: 0,
              backgroundColor: "red",
              marginVertical: 10,
            }}
            labelStyle={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
            onPress={() => {
              navigation.navigate("HaiE");
            }}
          >
            Tiến hành đặt hàng
          </Button>
        </View>
      </View>
    </View>
  );
}
