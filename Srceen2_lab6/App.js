import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item1.png')
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item2.png')
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item3.png')
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item4.png')
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item5.png')
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS/2',
    price: '69.900',
    discount: '39%',
    imageUrl: require('./assets/item6.png')
  },
  
];

const Product = ({ product }) => (
  <View style={styles.productContainer}>
    <Image source={product.imageUrl} style={styles.productImage} />
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productPrice}>{product.price}đ</Text>
    <Text style={styles.productDiscount}>{product.discount}</Text>
    <TouchableOpacity style={styles.buyButton}>
      <Text style={styles.buttonText}>Mua</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product product={item} />}
      numColumns={2}  // Sử dụng 2 cột nếu muốn hiển thị 2 sản phẩm một hàng
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 50,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productDiscount: {
    fontSize: 14,
    color: 'red',
  },
  buyButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
