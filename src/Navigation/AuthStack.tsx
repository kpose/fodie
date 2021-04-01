import * as React from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

/* import screens */

import {Welcome} from '../Screens';
import HomeTabNavigator from './HomeTabNavigator';

type AuthStackProps = {
  Welcome: undefined;
  HomeTabNavigator: undefined;
};

const Stack = createStackNavigator<AuthStackProps>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
}

export default AuthStack;
