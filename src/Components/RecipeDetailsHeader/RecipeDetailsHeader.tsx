import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

type HeaderProps = {
  navigation: any;
  title: string;
};

const RecipeDetailsHeader = (props: HeaderProps) => {
  const navigation = props.navigation;
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon
            name="chevron-left"
            size={Fonts.ICONS}
            color={COLORS.SECONDARY}
            style={{marginLeft: wp(4)}}
          />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons
              name="share-outline"
              size={Fonts.ICONS}
              color={COLORS.SECONDARY}
              style={{marginRight: wp(7)}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bookmark-o"
              size={Fonts.ICONS}
              color={COLORS.SECONDARY}
              style={{marginRight: wp(7)}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="heart-o"
              size={Fonts.ICONS}
              color={COLORS.SECONDARY}
              style={{marginRight: wp(6)}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </>
  );
};

export default RecipeDetailsHeader;
