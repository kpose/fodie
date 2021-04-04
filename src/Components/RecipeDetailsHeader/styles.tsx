import {StyleSheet} from 'react-native';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';
import {HEADER_MAX_HEIGHT} from '../../Utils/Constants';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  head: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    height: HEADER_MAX_HEIGHT,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    //marginRight: wp(4),
  },
  title: {
    marginLeft: wp(4),
    marginTop: hp(3),
    color: COLORS.WHITE,
    fontSize: Fonts.H5,
    fontWeight: 'bold',
  },
});

export default styles;
