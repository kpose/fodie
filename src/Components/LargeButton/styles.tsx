import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  buttonContainer: {
    width: wp(80),
    height: hp(8),
    backgroundColor: COLORS.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,

    //shadowColor: COLORS.PRIMARY_BACKGROUND,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: Fonts.H3,
    fontWeight: 'bold',
  },
});

export default styles;
