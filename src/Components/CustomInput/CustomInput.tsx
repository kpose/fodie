import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {COLORS} from '../../Utils';
import styles from './styles';

type InputProps = {
  defaultValue?: string;
  placeholder: string;
  autoFocus?: boolean;
  keyboardType?: string;
};

const CustomInput = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={props.defaultValue}
        autoFocus={props.autoFocus}
        autoCorrect={false}
        placeholder={props.placeholder}
        style={styles.textInput}
        placeholderTextColor={COLORS.WHITE}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default CustomInput;
