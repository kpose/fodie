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
  cardContainer: {
    backgroundColor: COLORS.PRIMARY,
    height: hp(30),
    width: wp(45),
    borderRadius: 10,
    marginBottom: hp(0.5),
    marginTop: hp(0.5),

    shadowColor: COLORS.SECONDARY,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cardImage: {
    height: hp(22),
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recipe: {
    fontWeight: 'bold',
    fontSize: Fonts.SMALLBODY,
    color: COLORS.WHITE,
    marginLeft: wp(2),
    marginTop: hp(0.5),
  },
  bookmark: {
    position: 'absolute',
    bottom: '35%',
    right: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1.5),
  },
  minutes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(2),
  },
  minutesText: {
    color: COLORS.SECONDARY,
    fontSize: Fonts.SMALLBODY,
  },
  vegan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(2),
  },
  veganText: {
    color: COLORS.SECONDARY,
    fontSize: Fonts.SMALLBODY,
  },
});

export default styles;
