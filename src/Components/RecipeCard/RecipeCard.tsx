import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, Fonts} from '../../Utils';

type CardProps = {
  title: string;
  image: any;
  minutes: number;
  vegan: boolean;
  onPress: () => void;
};

const RecipeCard = (props: CardProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
        <Image
          style={styles.cardImage}
          source={{
            uri: props.image,
          }}
        />
        <TouchableOpacity style={styles.bookmark}>
          <Icon name="bookmark-o" size={Fonts.ICONS} color={COLORS.PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.recipe} numberOfLines={1}>
          {props.title}
        </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.minutes}>
            <Icon name="clock-o" size={Fonts.SMALLBODY} color={COLORS.WHITE} />
            <Text style={styles.minutesText}> {props.minutes} Mins</Text>
          </View>

          {props.vegan ? (
            <View style={styles.vegan}>
              <Icon
                name="check-square-o"
                size={Fonts.SMALLBODY}
                color={COLORS.WHITE}
              />
              <Text style={styles.veganText}> Vegan?</Text>
            </View>
          ) : (
            <View style={styles.vegan}>
              <MaterialIcons
                name="cancel-presentation"
                size={Fonts.SMALLBODY}
                color={COLORS.WHITE}
              />
              <Text style={styles.veganText}> Vegan?</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCard;
