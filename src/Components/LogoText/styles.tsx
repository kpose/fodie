import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTitle: {
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
    fontSize: Fonts.H1,
  },
  logoDescription: {
    marginTop: hp(1),
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: Fonts.H2,
  },
});

export default styles;
