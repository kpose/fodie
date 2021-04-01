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
  textInput: {
    height: hp(7),
    width: wp(80),
    textAlign: 'center',
    fontSize: Fonts.SMALLBODY,
    alignSelf: 'center',
    marginTop: hp(1),
    borderRadius: wp(5),
    borderWidth: wp(0.3),
    borderColor: COLORS.PRIMARY_BACKGROUND,
  },
});

export default styles;
