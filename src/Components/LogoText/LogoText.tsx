import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type LogoTextProps = {
  //title: string;
};

const LogoText = (props: LogoTextProps) => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}> Foodie Hunt</Text>
      <Text style={styles.logoDescription}> Yeah, I can cook that!</Text>
    </View>
  );
};

export default LogoText;
