import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

/* Home Screen Navigation Types */
export type HomeRecipeStackParams = {
  Home: undefined;
  RecipeDetails: {
    title: string;
    dishType: string[];
    healthScore: number;
    image: any;
    description: string;
    ingredients: [];
  };
};

type RecipeDetailsRouteProp = RouteProp<HomeRecipeStackParams, 'RecipeDetails'>;
type RecipeDetailsNavigationProp = StackNavigationProp<
  HomeRecipeStackParams,
  'RecipeDetails'
>;

export type HomeRecipeProps = {
  route: RecipeDetailsRouteProp;
  navigation: RecipeDetailsNavigationProp;
};