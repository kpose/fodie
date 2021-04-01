import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
//import LottieView from 'lottie-react-native';

import {useNavigation} from '@react-navigation/native';
import {CustomInput, LargeButton} from '../../Components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, Fonts} from '../../Utils';

const cookingAnimation = require('../../Assets/LottieFiles/cooking.json');

type SignUpModalProps = {
  closeSignUpModal?: () => void;
};

const SignUpModal = (props: SignUpModalProps) => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableOpacity
        onPress={props.closeSignUpModal}
        style={styles.closeContainer}>
        <Icon name="close" size={Fonts.ICONS} color={COLORS.PRIMARY} />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Email"
          keyboardType="email-address"
          autoFocus={false}
        />
        <View style={styles.devide} />

        <CustomInput placeholder="Username" autoFocus={false} />
        <View style={styles.devide} />

        <CustomInput placeholder="Password" autoFocus={false} />
      </View>

      <View style={styles.buttonContainer}>
        <LargeButton title="Register" />
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.bottomText}>Already one of us? </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Log In </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpModal;
