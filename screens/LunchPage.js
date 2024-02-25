import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LunchPage = () => {
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigation = useNavigation();
  

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);
  const lunchIngredients = [
    'Spaghetti with capers and tomatoes: ',
    '1.  A bowl of any legumes (see general information)(100g)',
    '2.  A piece of fruit (two if small)',
    
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
    // Here you can add logic to navigate to the corresponding date
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

      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => handleNavigation('BreakfastPage')}>
          <Text style={styles.mealText}>Breakfast</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('MorningSnackPage')}>
          <Text style={styles.mealText}>Morning Snack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('LunchPage')}>
          <Text style={[styles.mealText, styles.highlighted]}>Lunch</Text>
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

      
      <Text style={styles.title}>Lunch</Text>
      
      <ScrollView>
        <Image
          source={require("../assets/lunch.jpg")}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Spaghetti with capers and tomatoes</Text>
          <View style={styles.ingredientsContainer}>
            {lunchIngredients.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={openAlternative} style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>Click to see other options</Text>
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

export default LunchPage;
