import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    //marginRight: wp(4),
  },
  recipeHeader: {
    marginLeft: wp(4),
    marginTop: hp(3),
  },
  title: {
    color: COLORS.WHITE,
    fontSize: Fonts.H2,
    fontWeight: 'bold',
  },
  dishType: {
    color: COLORS.WHITE,
    marginTop: hp(2),
    fontSize: Fonts.SMALLBODY,
  },
  dishTypes: {
    fontWeight: 'bold',
    color: COLORS.SECONDARY,
    marginTop: hp(2),
    fontSize: Fonts.H5,
  },
  dishTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  healthScore: {
    color: COLORS.WHITE,
    marginTop: hp(2),
    fontSize: Fonts.H5,
  },
  healthScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readyTime: {
    color: COLORS.WHITE,
    marginTop: hp(1),
    fontSize: Fonts.H5,
    fontWeight: 'bold',
  },
  readyTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: hp(50),
    width: wp(100),
    marginTop: hp(2),
    borderRadius: 5,
  },
  descriptionContainer: {},
  descriptionTitle: {
    //marginLeft: wp(4),
    marginTop: hp(2),
    marginBottom: hp(1),
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
    fontSize: Fonts.H3,
  },
  description: {
    color: COLORS.WHITE,
    fontSize: Fonts.H6,
    lineHeight: 25,
  },
  descriptionBody: {
    backgroundColor: COLORS.DARK_GRAY,
    marginRight: wp(2),
    marginLeft: wp(2),
    borderRadius: wp(3),
  },

  ingredientsImage: {
    height: hp(10),
    width: wp(22),
    borderRadius: 100,
    borderWidth: wp(0.5),
    borderColor: COLORS.SECONDARY,
    marginLeft: wp(3),
  },
  ingredientName: {
    color: COLORS.WHITE,
    fontSize: Fonts.SMALLBODY,
  },
  ingredientContainer: {
    alignItems: 'center',
  },
  ingredientHead: {
    marginTop: hp(2),
    marginBottom: hp(1),
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
    fontSize: Fonts.H3,
  },
});

export default styles;
