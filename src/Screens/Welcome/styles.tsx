import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: hp(100),
    width: wp(100),
  },
  buttonContainer: {
    marginTop: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    marginTop: hp(5),
  },
  signInText: {
    alignSelf: 'center',
    fontSize: Fonts.SMALLBODY,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: hp(3),
    width: wp(80),
    left: wp(10),
    right: wp(10),
  },
  footerText: {
    color: COLORS.PRIMARY_BACKGROUND,
  },
  skipButton: {
    position: 'absolute',
    top: hp(4),
    right: 0,
    marginRight: wp(8),
  },
  skipText: {
    color: COLORS.PRIMARY_BACKGROUND,
    fontSize: Fonts.H6,
    fontWeight: 'bold',
  },
});

export default styles;
