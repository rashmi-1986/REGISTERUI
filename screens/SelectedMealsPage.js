import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectedMealsPage= () => {
  const navigation = useNavigation();

  const meals = [
    'Breakfast',
    'Morning Snack',
    'Lunch',
    'Afternoon Snack',
    'Dinner',
    'Evening Snack',
  ];

  // Initialize state to keep track of selected items for each meal
  const [selectedItemsByMeal, setSelectedItemsByMeal] = useState({
    Breakfast: false,
    'Morning Snack': false,
    Lunch: false,
    'Afternoon Snack': false,
    Dinner: false,
    'Evening Snack': false,
  });

// Function to navigate to the next page with accumulated selected items
  const navigateToHomePage = () => {
    const selectedItems = Object.entries(selectedItemsByMeal)
      .filter(([_, isSelected]) => isSelected)
      .map(([meal]) => meal);

    navigation.navigate('HomePage', { selectedItems });
  };
// Inside SelectedMealsPage.js
const SelectedMealsPage = ({ route }) => {
  const { selectedItems } = route.params;

  // Add a check to ensure route.params is defined
  if (!route.params || !route.params.selectedItems) {
    return <Text>No selected items found</Text>;
  }

  // Function to update selected items for a specific meal
  const handleMealButtonPress = (meal) => {
    setSelectedItemsByMeal((prevSelectedItems) => ({
      ...prevSelectedItems,
      [meal]: !prevSelectedItems[meal],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
      <Text style={styles.title}>Selected Meals</Text>
      {selectedItems.map((meal, index) => (
        <Text key={index} style={styles.selectedItem}>
          {meal}
        </Text>
      ))}
    </View>
    <TouchableOpacity style={styles.nextButton} onPress={navigateToHomePage}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedItem: {
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  mealButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  mealButtonText: {
    fontSize: 18,
    color: 'black',
  },
  nextButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});


export default SelectedMealsPage;
