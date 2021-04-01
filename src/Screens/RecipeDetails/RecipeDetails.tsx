import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HTML from 'react-native-render-html';
import {HomeRecipeProps} from '../../Navigation/NavigationTypes';
import {MoreInfo} from '../../Components';

/* utils */
import {COLORS, Fonts} from '../../Utils';
import {
  heightPercentageToDP,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from '../../Utils/Helper/responsive';

const RecipeDetails = ({navigation, route}: HomeRecipeProps) => {
  const {
    title,
    dishType,
    healthScore,
    image,
    description,
    ingredients,
  } = route.params;
  console.log(ingredients);
  const regex = /(<([^>]+)>)/gi;
  const summary = description.replace(regex, '');
  //const baseUrl = 'https://spoonacular.com/cdn/ingredients_100x100/'

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={styles.recipeHeader}>
          <Text style={styles.title}>{title}</Text>
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
          {/* <MoreInfo text={summary} linesToTruncate={20} /> */}
          <HTML
            source={{html: description}}
            contentWidth={wp(100)}
            baseFontStyle={styles.description}
            containerStyle={{marginLeft: wp(1.5)}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetails;
