import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

export default function App() {
  const todoItems = [
    "To check email",
    "UI task web page",
    "Learn javascript basic",
    "Learn HTML Advance",
    "Medical App UI",
    "Learn Java"
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header section with avatar and greeting */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Image 
              source={require('./assets/Avatar.jpg')}
              alt="User avatar" 
              style={styles.avatarImage}
            />
          </View>
          <View>
            <Text style={styles.greeting}>Hi Twinkle</Text>
            <Text style={styles.subGreeting}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>

      {/* Todo list container */}
      <View style={styles.contentContainer}>
        <ScrollView style={styles.todoList}>
          {todoItems.map((item, index) => (
            <View key={index} style={styles.todoItem}>
              <View style={styles.todoCheckbox}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
              <Text style={styles.todoText}>{item}</Text>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editIcon}>✎</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Add button - now centered at bottom */}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  todoCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkmark: {
    color: 'white',
  },
  todoText: {
    flex: 1,
  },
  editButton: {
    padding: 4,
  },
  editIcon: {
    color: '#666',
  },
  addButtonContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: 'white',
  },
});