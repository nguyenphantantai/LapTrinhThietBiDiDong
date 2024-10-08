import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/note.jpg')}
            style={styles.noteImage}
          />
        </View>

        <Text style={styles.title}>
          MANAGE YOUR{'\n'}TASK
        </Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your name"
            style={styles.nameInput}
          />
        </View>
        
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>GET STARTED →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 40,
  },
  noteImage: {
    width: 200,
    height: 240,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9333ea',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  nameInput: {
    width: '100%',
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  startButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#06b6d4',
    borderRadius: 25,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
  },
});