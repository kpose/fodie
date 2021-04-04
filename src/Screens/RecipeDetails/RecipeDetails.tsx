import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HTML from 'react-native-render-html';
import {HomeRecipeProps} from '../../Navigation/NavigationTypes';
import {
  MoreInfo,
  RecipeInstruction,
  RecipeDetailsHeader,
} from '../../Components';

import {useDispatch, useSelector} from 'react-redux';
import {similarRecipes} from '../../Redux/Actions/RecipeActions';
import {getsimilarRecipes} from '../../Redux/selectors';

/* utils */
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const RecipeDetails = ({navigation, route}: HomeRecipeProps) => {
  const {
    id,
    title,
    dishType,
    healthScore,
    image,
    description,
    ingredients,
    instructions,
  } = route.params;
  const regex = /(<([^>]+)>)/gi;
  const summary = description.replace(regex, '');

  const dispatch = useDispatch();

  const similarRecipes = useSelector(getsimilarRecipes);
  console.log(similarRecipes);

  const renderIngredients = ({item}: any) => {
    return (
      <View style={styles.ingredientContainer} key={item.id}>
        <Image
          source={{
            uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`,
          }}
          style={styles.ingredientsImage}
        />
        <Text style={styles.ingredientName}>{item.name}</Text>
      </View>
    );
  };

  const jj = ({item}: any) => {
    return console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <RecipeDetailsHeader navigation={navigation} title={title} />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.recipeHeader}>
          <View style={styles.dishTypeContainer}>
            <Text style={styles.dishType}>Dish Type: </Text>
            <Text style={styles.dishTypes}>
              {dishType[0]}, {dishType[1]}, {dishType[2]}
            </Text>
          </View>

          <View style={styles.healthScoreContainer}>
            <Icon
              name="heartbeat"
              size={Fonts.ICONS}
              color={COLORS.WHITE}
              style={{
                marginTop: heightPercentageToDP(2),
                marginRight: widthPercentageToDP(3),
              }}
            />
            <Text style={styles.healthScore}>
              with an amazing health score of {healthScore}
            </Text>
          </View>

          <View style={styles.readyTimeContainer}>
            <Icon
              name="clock-o"
              size={Fonts.ICONS}
              color={COLORS.WHITE}
              style={{
                marginTop: heightPercentageToDP(1),
                marginRight: widthPercentageToDP(3),
              }}
            />
            <Text style={styles.readyTime}>Ready in {healthScore} minutes</Text>
          </View>
        </View>
        <Image source={{uri: image}} style={styles.image} />

        <View>
          <Text style={styles.ingredientHead}>Ingredients: </Text>
          <FlatList
            data={ingredients}
            renderItem={renderIngredients}
            keyExtractor={item => item.id}
            extraData={ingredients}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <View style={styles.descriptionBody}>
          {/* <Text style={styles.description}>{description}</Text> */}
          <MoreInfo text={summary} linesToTruncate={20} />
          {/* <HTML
            source={{html: description}}
            contentWidth={wp(100)}
            baseFontStyle={styles.description}
            containerStyle={{marginLeft: wp(1.5)}}
          /> */}
        </View>
        <Text style={styles.preparationTitle}>Preparation:</Text>
        {instructions.map(items => {
          return (
            <View>
              {items.steps.map(item => {
                return <RecipeInstruction steps={item} key={item.number} />;
              })}
            </View>
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
