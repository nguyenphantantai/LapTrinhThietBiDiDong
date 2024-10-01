import { Text, View, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';

const data_product = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop_name: 'Shop Devang',
    image: require('./assets/sp1.png'),
  },
  {
    id: '2',
    title: '1KG khô gà bơ, tỏi',
    shop_name: 'Shop LTD Food',
    image: require('./assets/sp2.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop_name: 'Shop Thế giới đồ chơi',
    image: require('./assets/sp3.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop_name: 'Shop Thế giới đồ chơi',
    image: require('./assets/sp4.png'),
  },
  {
     id: '5',
    title: 'Lãnh đạo giản đơn',
    shop_name: 'Shop Minh Long book',
    image: require('./assets/sp5.png'),
  },
  {
    id: '6',
    title: 'Hiếu lòng con trẻ',
    shop_name: 'Shop Minh Long book',
    image: require('./assets/sp6.png'),
  },
  {
    id: '7',
    title: 'Tập làm lãnh đạo',
    shop_name: 'Shop Minh Long book',
    image: require('./assets/sp7.png'),
  },
]

const Item = ({obj}) => (
    <View style = {styles.productItem}>
      <Image source={obj.image} style={styles.imageItem}/>
      <View style ={styles.subtitle}>
         <Text style={styles.textItem}>
          {obj.title}
        </Text>
        <Text style={styles.shopNameItem}>
          {obj.shop_name}
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonItem}>
        <Text style ={styles.buttonText}>CHAT</Text>
      </TouchableOpacity>
    </View>
)

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.textHeader}>
        Bạn có thắc mắc với ản phẩm vừa xem. Đừng ngại chát với shop
      </Text>
      </View>

        <FlatList style = {styles.flatList}
           data={data_product}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item obj={item} />}
        contentContainerStyle={styles.courseList}
        />

      <View style = {styles.bottomMenu}>
      <Text>...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  textHeader: {
    margin: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  flatList:{
    flex:2,
    justifyContent: 'space-between',
  },

  productItem: {
    flexDirection:'row',
    padding: 10,
    justifyContent: 'space-between',
    borderColor: '#DDDDDD',
    borderWidth: 2,
  },

  imageItem: {
    width: 100,
    height: 100,
    borderColor: 'green',
    borderWidth: 1,
  },

  textItem: {
    fontSize: 12
  },

  shopNameItem:{
    color: 'red',
    fontWeight: 600,
    fontSize: 13
  },

  buttonItem:{
    backgroundColor: 'red',
    alignItems: 'center',
    height: 40,
    padding: 10,
    marginLeft: 5,
    marginRight: 10,
  },

  buttonText:{
    color:'white',
    fontWeight: 700
  },

  subtitle:{
    flexDirection:'column',
    justifyContent: 'space-around'
  },

  bottomMenu:{
    flex: 2,
    backgroundColor: 'blue',
    height:50
  }
});
