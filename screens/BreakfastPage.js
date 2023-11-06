import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { Picker } from '@react-native-picker/picker';

const breakfastIngredients = [
  'Ingredients for 10-12 muffin: ',
  '1.  200 g of vegetables (courgettes, peppers, aubergines, etc.)',
  '2.  180 g of wheat flour',
  '3.  Three eggs',
  '4.  100 ml of milk',
  '5.  100 ml of extra virgin olive oil',
  '6.  50 g of grated Parmigiano Reggiano',
  '7.  Onion',
  '8.  One sachet of yeast for pies',
  '9.  Salt',
  '10. Pepper',
  // Add more ingredients
];

const breakfastRecipes = [
  'Recipe Option 1',
  'Recipe Option 2',
  'Recipe Option 3',
];

const BreakfastPage = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);

  const recipeText = `Slice the vegetables into small cubes, except the peppers, which you will slice into thin strips (similar to sticks). In a non-stick pan, sauté the onion in the oil for a couple of minutes, add the vegetables. Season with salt and pepper and sauté for about 10 minutes. Leave to cool completely. In a bowl, beat the eggs together with the milk and olive oil. Add the grated cheese and the sifted flour. Season with salt and pepper and mix with a spatula. Add the yeast, mix, and add the vegetables, keeping a part of it to decorate the muffins. Divide the mixture into 10-12 greased and floured muffin molds, garnish with the remaining vegetables and bake in the preheated oven at 180°C for about 25 minutes, checking the cooking with a toothpick. Allow cooling completely before serving.`;

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={openAlternative}>
            <Icon name="menu" color="white" />
          </TouchableOpacity>
        }
        centerComponent={<CustomHeader title="Breakfast" />}
      />

      <ScrollView>
        <Image
          source={require("../assets/hero3.jpg")}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />

        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            <Text style={styles.heading}>Ingredients</Text>
            <Picker
              selectedValue={selectedIngredient}
              onValueChange={(itemValue) => setSelectedIngredient(itemValue)}
            >
              <Picker.Item label="Select an ingredient" value={null} />
              {breakfastIngredients.map((ingredient, index) => (
                <Picker.Item label={ingredient} value={ingredient} key={index} />
              ))}
            </Picker>
          </View>

          <View style={styles.column}>
            <Text style={styles.heading}>Recipe</Text>
            <Picker
              selectedValue={selectedRecipe}
              onValueChange={(itemValue) => setSelectedRecipe(itemValue)}
            >
              <Picker.Item label="Select a recipe option" value={null} />
              {breakfastRecipes.map((recipe, index) => (
                <Picker.Item label={recipe} value={recipe} key={index} />
              ))}
            </Picker>
          </View>
        </View>

        {selectedRecipe && (
          <View style={styles.recipeInstructions}>
            <Text style={styles.heading}>Recipe Instructions</Text>
            <Text>{recipeText}</Text>
          </View>
        )}

        <TouchableOpacity onPress={openAlternative} style={styles.alternativeButton}>
          <Text style={styles.alternativeButtonText}>Alternative Options</Text>
        </TouchableOpacity>
      </ScrollView>

      <Overlay isVisible={isAlternativeVisible} onBackdropPress={closeAlternative}>
        {/* Alternative content goes here */}
        <Text>Alternative Option 1</Text>
        <Text>Alternative Option 2</Text>
        <Text>Alternative Option 3</Text>
        {/* Add more alternative options */}
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 10,
  },
  recipeInstructions: {
    marginBottom: 20,
  },
  alternativeButton: {
    alignItems: 'center',
    margin: 20,
  },
  alternativeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default BreakfastPage;
