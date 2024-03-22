import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import ApplianceListPage from './ApplianceListPage';
import EmojiListPage from './EmojiListPage';
import { EmojiProvider } from './EmojiContext'; // Import EmojiProvider

const Stack = createStackNavigator();

const App = () => {
  return (
    <EmojiProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignIn" component={SignInPage} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="ApplianceList" component={ApplianceListPage} options={{ headerShown: false }} />
          <Stack.Screen name="EmojiList" component={EmojiListPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </EmojiProvider>
  );
}

export default App;
