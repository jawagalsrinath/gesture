import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#e9e9e9"}}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
              Let's Get Started!
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                source={require('./assets/welcomeImage.jpeg')}
                style={{ width: 450, height: 350 , display : "flex" , justifyContent : "center"}}
              />
            </View>
            <View style={{ marginVertical: 16 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={{ paddingVertical: 12, backgroundColor: '#E16721CC', marginHorizontal: 7, borderRadius: 20 }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#000' }}>
                  Sign up
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 26 }}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                  <Text style={{ fontWeight: '600', color: '#E16721CC' }}> Log In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      );
}

export default WelcomePage;

