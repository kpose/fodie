import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRecipeStackParams} from './NavigationTypes';

/* import screens */

import {RecipeDetails, Home} from '../Screens';

const Stack = createStackNavigator<HomeRecipeStackParams>();

function HomeRecipeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}

export default HomeRecipeStack;
