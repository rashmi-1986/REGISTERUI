import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const AfternoonSnackPage = () => {
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false); // Added state variable for menu visibility
  const [scrollX] = useState(new Animated.Value(0)); // Track scroll position

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const navigateToPage = (page) => {
    navigation.navigate(page);
    closeMenu(); // Close the menu after navigation
  };

  const eveningsnackIngredients = [
    'Nuts: ',
    '1.  Walnuts(25g)',
    '2.  Almonds(25g)',
    '3.  Cashews(25g)',
  ];
  const mealOptions = [
    { name: 'Breakfast', onPress: () => handleNavigation('BreakfastPage') },
    { name: 'Morning Snack', onPress: () =>handleNavigation('MorningSnackPage') },
    { name: 'Lunch', onPress: () => handleNavigation('LunchPage') },
    { name: 'Afternoon Snack', onPress: () =>handleNavigation('AfternoonSnackPage') },
    { name: 'Dinner', onPress: () => handleNavigation('DinnerPage') },
    { name: 'Evening Snack', onPress: () =>handleNavigation('EveningSnackPage') },
  ];

  const handleNavigation = (meal) => {
    navigation.navigate(meal); // Navigate to the respective screen
  };

  const handleDateNavigation = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'yesterday') {
      newDate.setDate(currentDate.getDate() - 1);
    } else if (direction === 'tomorrow') {
      newDate.setDate(currentDate.getDate() + 1);
    }
    setCurrentDate(newDate);
    
  };
  const renderMealOptions = () => {
    return mealOptions.map((option, index) => (
      <TouchableOpacity key={index} onPress={option.onPress}
style={styles.mealOption}>
        <Text style={styles.mealOptionText}>{option.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => handleDateNavigation('yesterday')}>
          <Text style={styles.navigationText}>Yesterday</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleDateNavigation('tomorrow')}>
          <Text style={styles.navigationText}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.mealOptionsContainer}>{renderMealOptions()}</View>
      </ScrollView>

      <Text style={styles.title}>Afternoon Snack</Text>
      <ScrollView>
        <Image
          source={require("../assets/nuts.jpg")}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Nuts</Text>
          <View style={styles.ingredientsContainer}>
            {eveningsnackIngredients.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={openAlternative} style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>Click to see other options</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={openMenu}>
          <Icon name="settings" size={30} color="black" />
          <Text style={styles.iconLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="description" size={30} color="black" />
          <Text style={styles.iconLabel}>Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="apple" type="font-awesome-5" size={30} color="black" />
          <Text style={styles.iconLabel}>Meal</Text>
        </TouchableOpacity>
      </View>

      <Overlay isVisible={isMenuVisible} onBackdropPress={closeMenu}>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() =>navigateToPage('Signup')}>
            <Text>Account Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigateToPage('MealSelectionPage')}>
            <Text>Meal Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() =>navigateToPage('TermsAndConditions')}>
            <Text>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
      </Overlay>

      <Overlay isVisible={isAlternativeVisible} onBackdropPress={closeAlternative}>
        <Text>Alternative Option 1</Text>
        <Text>Alternative Option 2</Text>
        <Text>Alternative Option 3</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF', // Light blue background color
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationText: {
    fontSize: 16,
    color: 'blue',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  mealText: {
    fontSize: 16,
  },
  highlighted: {
    fontWeight: 'bold',
    color: 'green',
  },
  mealOptionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mealOption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#E0FFFF',
    marginRight: 10,
  },
  mealOptionText: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    alignSelf: 'center', // Align title to center
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  ingredientsContainer: {
    padding: 10,
  },
  swipeButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  swipeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5, // Adjust as needed for spacing
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AfternoonSnackPage;
