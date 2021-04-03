import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type InstructionProps = {
  steps: [];
};

const RecipeInstruction = (props: InstructionProps) => {
  console.log(props.steps);
  const step = props.steps;
  return (
    <View style={styles.container}>
      <View style={styles.prepContainer}>
        <Text style={styles.number}>{step.number}:</Text>
        <Text style={styles.text}>{step.step}</Text>
      </View>
    </View>
  );
};

export default RecipeInstruction;
