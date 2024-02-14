import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const BreakfastPage = () => {
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigation = useNavigation();
  

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);
  
  const breakfastIngredients = [
    'Yoghurt bowl with fruits: ',
    '1.  Natural yogurt - 1 cup(200g)',
    '2.  Muesli - 2 spoons(40g)',
    '3.  Seeds - 1 spoon(20g)',
    '4.  Fresh fruits - 1 cup(200g)',
  ];
  const handleNavigation = (meal) => {
    navigation.navigate(meal); // Navigate to the respective screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => handleNavigation('Yesterday')}>
          <Text style={styles.navigationText}>Yesterday</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleNavigation('Tomorrow')}>
          <Text style={styles.navigationText}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => handleNavigation('BreakfastPage')}>
        <Text style={[styles.mealText, styles.highlighted]}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('MorningSnackPage')}>
          <Text style={styles.mealText}>Morning Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('LunchPage')}>
          <Text style={styles.mealText}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('AfternoonSnackPage')}>
          <Text style={styles.mealText}>Afternoon Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('DinnerPage')}>
          <Text style={styles.mealText}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('EveningSnackPage')}>
          <Text style={styles.mealText}>Evening Snack</Text>
        </TouchableOpacity>
      </View>

     

  
      <Text style={styles.title}>Breakfast</Text>
    
      <ScrollView>
        <Image
          source={require("../assets/breakfastdesign.jpg")}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Yoghurt bowl with fruits</Text>
          <View style={styles.ingredientsContainer}>
            {breakfastIngredients.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </View>
        </View>
        <TouchableOpacity onPress={openAlternative} style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>Swipe to see other options</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="calendar" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="apple" type="font-awesome-5" size={30} color="black" />
        </TouchableOpacity>
      </View>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mealText: {
    fontSize: 16,
    color: 'black',
  },
  highlighted: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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
    paddingVertical: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
});



export default BreakfastPage;
