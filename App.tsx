import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import SubScreen from './src/screens/SubScreen';
import BottomTab from './src/controller/BottomTab';
import { UserContext } from './src/contexts/userContexts';

const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserType } from './src/types/UserType';

const Tab = createBottomTabNavigator();

export default function App() {
  const [userInfo, setUserInfo] = useState<null | undefined | UserType>();
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ title: 'My first Page', headerShown: false }}
          />
          <Stack.Screen name="Sub" component={SubScreen} />
          <Stack.Screen name="Third" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
