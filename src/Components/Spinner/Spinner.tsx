import React from 'react';
import {ActivityIndicator, View, StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../Utils';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../Utils/Helper/responsive';

const {height, width} = Dimensions.get('window');

const Spinner = () => {
  return (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          color={COLORS.SECONDARY}
          style={{
            left: 1.3,
            top: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height,
    width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.SEMI_TRANSPARENT,
  },
  indicator: {
    backgroundColor: COLORS.PRIMARY,
    height: heightPercentageToDP(6),
    width: widthPercentageToDP(20),
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
