import React from 'react';
import {Text, View,Image,TextInput} from 'react-native';

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
        <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      
    </View>
  );
};

export default YourApp;