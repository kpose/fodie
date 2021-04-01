import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

const LargeButton = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
