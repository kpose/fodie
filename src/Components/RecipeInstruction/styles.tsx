import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  prepContainer: {
    flexDirection: 'row',
    width: wp(92),
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    marginBottom: hp(1),
    borderRadius: 5,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  number: {
    marginLeft: wp(2),
    marginTop: hp(0.5),
    fontWeight: 'bold',
    fontSize: Fonts.BIGBODY,
    color: COLORS.WHITE,
  },
  text: {
    marginLeft: wp(3),
    marginBottom: hp(1),
    flexWrap: 'wrap',
    flexShrink: 1,
    marginTop: hp(0.5),
    fontSize: Fonts.SMALLBODY,
    lineHeight: hp(2),
    marginRight: wp(2),
    color: COLORS.WHITE,
  },
});

export default styles;
