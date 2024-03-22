import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignInPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here you can implement your sign-in logic
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      // If sign-in is successful, navigate to the home page
      navigation.navigate('Home');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Image
        source={require('./assets/welcomeImage.jpeg')}
        style={styles.image}
      />
      <Text style={styles.motto}>Control the world with hand gestures!</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleSignIn}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#e9e9e9",
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  motto: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#E16721CC',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default SignInPage;
