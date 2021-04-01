import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {LogoText, MediumButton} from '../../Components';
import {SignUpModal, SignInModal} from '../../Modals';

import {useNavigation} from '@react-navigation/native';
import {Modalize} from 'react-native-modalize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';
import {COLORS} from '../../Utils';

const backgroundImage = require('../../Assets/Images/5.jpg');

type ButtonProps = {
  //title: string;
};

const Welcome = (props: ButtonProps) => {
  const navigation = useNavigation();
  const SignupRef = useRef<Modalize>(null);
  const SigninRef = useRef<Modalize>(null);

  const onSignUpOpen = () => {
    SignupRef.current?.open();
  };

  const onSignInOpen = () => {
    SigninRef.current?.open();
  };

  const onSignUpClose = () => {
    SignupRef.current?.close();
  };

  const onSignInClose = () => {
    SigninRef.current?.close();
  };

  return (
    <>
      <StatusBar hidden />

      <Modalize
        ref={SignupRef}
        modalHeight={hp(60)}
        handlePosition="inside"
        scrollViewProps={{scrollEnabled: false}}
        modalStyle={{
          backgroundColor: '#423124',
          width: wp(100),
        }}>
        <SignUpModal closeSignUpModal={onSignUpClose} />
      </Modalize>

      <Modalize
        ref={SigninRef}
        modalHeight={hp(60)}
        handlePosition="inside"
        scrollViewProps={{scrollEnabled: false}}
        modalStyle={{
          backgroundColor: '#423124',
          width: wp(100),
        }}>
        <SignInModal closeSignInModal={onSignInClose} />
      </Modalize>

      <View style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate('HomeTabNavigator')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <LogoText />
          <View style={styles.buttonContainer}>
            <MediumButton title="Sign Me Up" onPress={onSignUpOpen} />
            <MediumButton title="Sign Me In" onPress={onSignInOpen} />
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Welcome;
