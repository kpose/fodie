import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StatusBar, FlatList} from 'react-native';
import styles from './styles';
import {HomeRecipeProps} from '../../Navigation/NavigationTypes';

/* components */
import {RecipeCard, Spinner} from '../../Components';

/* redux */
import {useDispatch, useSelector} from 'react-redux';
import listAllRecipes from '../../Redux/Actions/RecipeActions';
import {getRecipes} from '../../Redux/selectors';

const Home = ({navigation}: HomeRecipeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllRecipes(100));
  }, [dispatch]);

  const {loading: recipesLoading, error: recipesError} = useSelector(
    state => state.getRecipes,
  );
  const recipes = useSelector(getRecipes);

  const renderItem = ({item}: any) => {
    return (
      <RecipeCard
        title={item.title}
        image={item.image}
        minutes={item.readyInMinutes}
        vegan={item.vegan}
        onPress={() =>
          navigation.navigate('RecipeDetails', {
            title: item.title,
            dishType: item.dishTypes,
            healthScore: item.healthScore,
            image: item.image,
            description: item.summary,
            ingredients: item.extendedIngredients,
          })
        }
      />
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
      <SafeAreaView style={styles.container}>
        {recipesLoading ? (
          <Spinner />
        ) : (
          <FlatList
            data={recipes.recipes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            extraData={recipes.recipes}
            showsVerticalScrollIndicator={false}
            initialNumToRender={12}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
