import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Navigation/AuthStack';

import {Provider} from 'react-redux';
import store from './Redux/store';

import {Welcome} from './Screens';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <AuthStack />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
