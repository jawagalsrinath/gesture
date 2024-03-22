import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleCustomizeGesture = () => {
    // Handle navigation to appliance list page
    navigation.navigate('ApplianceList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Gesture World</Text>
        <TouchableOpacity onPress={() => HomePage}>
          <Image
            source={require('./assets/profile.jpeg')} // Add your profile image
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('./assets/banner.png')} // Add your welcome banner image
        style={styles.bannerImage}
      />
      <TouchableOpacity onPress={handleCustomizeGesture} style={styles.customizeButton}>
        <Text style={styles.buttonText}>Customize Hand Gestures</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCustomizeGesture} style={styles.customizeButton}>
        <Text style={styles.buttonText}>Scription Planes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCustomizeGesture} style={styles.customizeButton}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={handleCustomizeGesture} style={styles.customizeButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40, // Add margin top to the navbar
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bannerImage: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    margin: 10,
    backgroundColor : '#CBC5C8CC',
    width: '95%',
    height: 400,
  },
  customizeButton: {
    backgroundColor: '#E16721',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomePage;
