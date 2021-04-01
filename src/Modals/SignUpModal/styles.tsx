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

  devide: {
    height: hp(3),
  },
  buttonContainer: {
    marginTop: hp(5),
    alignItems: 'center',
  },
  closeContainer: {
    position: 'absolute',
    top: hp(1),
    right: 0,
    marginRight: wp(4),
  },
  inputContainer: {
    marginTop: hp(7),
  },

  footerContainer: {
    marginTop: hp(4),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: COLORS.WHITE,
  },
  signup: {
    color: COLORS.PRIMARY_BACKGROUND,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
