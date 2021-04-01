import * as React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

/* import screens */

import {Add, Profile, Saved, Search} from '../Screens';
import HomeRecipeStack from './HomeRecipeStack';

import {COLORS, Fonts} from '../Utils';

type AuthStackProps = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Saved: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<AuthStackProps>();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: COLORS.SECONDARY,
        inactiveTintColor: COLORS.WHITE,
        style: {backgroundColor: COLORS.PRIMARY},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="home" size={Fonts.H2} color={color} />
          ),
        }}
        name="Home"
        component={HomeRecipeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={Fonts.H2} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="plus-square-o" size={Fonts.H2} color={color} />
          ),
        }}
        name="Add"
        component={Add}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bookmark-o" size={Fonts.H2} color={color} />
          ),
        }}
        name="Saved"
        component={Saved}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-o" size={Fonts.H2} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
