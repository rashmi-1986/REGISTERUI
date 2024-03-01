import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomePage = () => {
  
  
  const navigation = useNavigation();
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMeal, setSelectedMeal] = useState(null);

  const navigateToBreakfastPage = () => {
    navigation.navigate('BreakfastPage');
  };

  const navigateToFeedback = () => {
    navigation.navigate('Feedback');
  };

  
 /* const route = useRoute();
  const { gender } = route.params; // Retrieve the gender prop passed from Signup

  // Your existing code
  
  // Function to navigate to the appropriate diet plan page based on gender
  const navigateToDietPlanPage = () => {
    if (gender === 'male') {
      navigation.navigate('Mendietplan');
    } else if (gender === 'female') {
      navigation.navigate('Womendietplan');
    } else {
      // Handle other genders if needed
      console.log('Invalid gender specified');
    }
  };*/

  
  const getDayWithOffset = (offset) => {
    const currentDate = new Date();
    const targetDate = new Date(selectedDate);
    targetDate.setDate(selectedDate.getDate() + offset);
    return targetDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' });
  };

  const handleDateNavigation = (direction) => {
    const newDate = new Date(selectedDate);
    if (direction === 'yesterday') {
      newDate.setDate(selectedDate.getDate() - 1);
    } else if (direction === 'tomorrow') {
      newDate.setDate(selectedDate.getDate() + 1);
    }
    setSelectedDate(newDate);
    // Here you can add logic to navigate to the corresponding date
  };
  


  const navigateToMealPage = (meal) => {
    setSelectedMeal(meal);
    switch (meal) {
      case 'Breakfast':
        navigation.navigate('BreakfastPage');
        break;
      case 'Morning Snack':
        navigation.navigate('MorningSnackPage');
        break;
      case 'Lunch':
        navigation.navigate('LunchPage');
        break;
      case 'Afternoon Snack':
        navigation.navigate('AfternoonSnackPage');
        break;
      case 'Dinner':
        navigation.navigate('DinnerPage');
        break;
      case 'Evening Snack':
        navigation.navigate('EveningSnackPage');
        break;
      default:
        break;
    }
  };
  
  const mealItems = [
    {
      name: 'Breakfast',
      description: 'Yoghurt Bowl\n\nYoghurt - 1 cup (200grams)\nMuseli - 2 spoons',
      options: 'Read more or see other options ->',
      image: require('../assets/breakfastdesign.jpg'),
    },
    {
      name: 'Morning Snack',
      description: 'Fruit Salad\n\nStrawberry - 1 cup (200grams)\nGrapes - 1 cups',
      options: 'Read more or see other options ->',
      image: require('../assets/morningsnack.jpg'),
    },
    {
      name: 'Lunch',
      description: 'Salmon and Salad\n\nVegetable - (200grams)\nSalmon - (100 grams)',
      options: 'Read more or see other options ->',
      image: require('../assets/lunch.jpg'),
    },
    {
      name: 'Afternoon Snack',
      description: 'Kiwi',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg'),
    },
    {
      name: 'Dinner',
      description: 'Meat Fillet with green Pepper',
      options: 'Read more or see other options ->',
      image: require('../assets/dinner.jpg'),
    },
    {
      name: 'Evening Snack',
      description: 'Meat Fillet with green Pepper',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg'),
    },
  ];

  const renderWeekDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    
      <View style={styles.header}>
        <Text style={styles.headerText}>My Weekly Plan</Text>
        <TouchableOpacity onPress={navigateToBreakfastPage}>
          <Image source={require("../assets/SOS.png")} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
       
           {renderWeekDates().map((date, index) => (
          <View key={index} style={styles.dayContainer}>
           
           <Text style={styles.dateText}>{getDayWithOffset(index)}</Text>
          
        
      
      <TouchableOpacity
                style={[
                  styles.dateButton,
                  date.toDateString() === selectedDate.toDateString() && styles.selectedDateButton
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <View style={styles.circleDate}>
                <Text style={styles.dateButtonText}>{date.getDate()}</Text>
                </View>
              </TouchableOpacity>
              <Icon name="event" family="material" /> 
            </View>
          ))}
        </View>

        <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => handleDateNavigation('yesterday')}>
          <Text style={[styles.navigationText, { color: '#0000FF' }]}>Yesterday</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleDateNavigation('tomorrow')}>
          <Text style={[styles.navigationText, { color: '#0000FF' }]}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.mealContainer}>
          {mealItems.map((meal, index) => (
            <TouchableOpacity key={index} style={styles.mealItem} onPress={() => navigateToMealPage(meal.name)}>
              <View style={styles.mealInfoContainer}>
                <View style={styles.mealTextContainer}>
                  <Text style={styles.mealText}>{meal.name}</Text>
                  <Text style={styles.descriptionText}>{meal.description}</Text>
                  <Text style={styles.optionsText}>{meal.options}</Text>
                </View>
                <Image source={meal.image} style={styles.mealImage} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={navigateToFeedback}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    flex: 1,
  },
  headerIcon: {
    width: 30,
    height: 30,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 15,
  },
  calendar: {
    marginBottom: 30,
  },
  mealContainer: {
    paddingVertical: 10,
  },
  mealItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mealInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealTextContainer: {
    flex: 1,
  },
  mealText: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 8,
  },
  optionsText: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  mealImage: {
    width: 200,
    height: 250,
    resizeMode: 'contain',
  },
  nextButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dateButton: {
    alignItems: 'center',
  },
  circleDate: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // You can customize the color
  },
  selectedDateButton: {
    backgroundColor: '#0000FF', // You can customize the color for the selected date
  },
  dateButtonText: {
    fontSize: 20,
  },
  navigationText: {
    fontSize: 18, // Adjust the size as needed
    marginHorizontal: 5,
  }
  
});

export default HomePage;
