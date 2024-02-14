import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet }
from 'react-native';
import { useNavigation } from '@react-navigation/native';

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'short', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const HomePage = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(getCurrentDateAndDay());
  const [selectedMeal, setSelectedMeal] = useState(null);

  const navigateToBreakfastPage = () => {
    navigation.navigate('BreakfastPage');
  };

  const navigateToFeedbackPage = () => {
    navigation.navigate('FeedbackPage');
  };


  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getDayWithOffset = (offset) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + offset);
    const options = { weekday: 'short', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedMeal(null);
  };

  const handleYesterdayClick = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const options = { weekday: 'short', day: 'numeric' };
    setSelectedDate(yesterday.toLocaleDateString(undefined, options));
    setSelectedMeal(null);
  };

  const handleTomorrowClick = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const options = { weekday: 'short', day: 'numeric' };
    setSelectedDate(tomorrow.toLocaleDateString(undefined, options));
    setSelectedMeal(null);
  };

  const navigateToMealPage = (meal) => {
    setSelectedMeal(meal);
    navigation.navigate(`${meal}Page`);
  };

  const mealItems = [
    {
      name: 'Breakfast',
      description: 'Yoghurt Bowl\n\nYoghurt - 1 cup (200grams)\nMuseli - 2 spoons',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg'),
    },
    {
      name: 'Morning Snack',
      description: 'Fruit Salad\n\nStrawberry - 1 cup (200grams)\nGrapes - 1 cups',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg'),
     },
    {
      name: 'Lunch',
      description: 'Salmon and Salad\n\nVegetable - (200grams)\nSalmon - (100 grams)',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg') ,
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
      image: require('../assets/nuts.jpg'),
     },
     {
      name: 'Evening Snack',
      description: 'Meat Fillet with green Pepper',
      options: 'Read more or see other options ->',
      image: require('../assets/nuts.jpg'),
     },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Weekly Plan</Text>
        <TouchableOpacity onPress={navigateToBreakfastPage}>
          <Image source={require("../assets/SOS.png")}
style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity key={index} style={styles.dayContainer}
onPress={() => handleDateClick(getDayWithOffset(index))}>
            <View style={[styles.dateCircle, selectedDate ===
getDayWithOffset(index) ? styles.currentDateCircle : null]}>
              <Text style={[styles.dateText, selectedDate ===
getDayWithOffset(index) ? styles.currentDateText : null]}>
                {getDayWithOffset(index)}
              </Text>
            </View>
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleYesterdayClick}>
          <Text style={styles.buttonText}>Yesterday</Text>
        </TouchableOpacity>
        <Text style={styles.currentDate}>{selectedDate}</Text>
        <TouchableOpacity style={styles.button} onPress={handleTomorrowClick}>
          <Text style={styles.buttonText}>Tomorrow</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.mealContainer}>
          {mealItems.map((meal, index) => (
            <TouchableOpacity key={index} style={styles.mealItem}
onPress={() => navigateToMealPage(meal.name)}>
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
      <TouchableOpacity style={styles.nextButton}
onPress={navigateToFeedbackPage}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
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
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
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
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  dayContainer: {
    alignItems: 'center',
  },
  dateCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  currentDateCircle: {
    backgroundColor: 'blue',
  },
  dateText: {
    color: 'black',
    fontSize: 12,
  },
  currentDateText: {
    color: 'white',
  },
  dayText: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
  },
  currentDate: {
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 5,
  },
  optionsText: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  mealImage: {
    width: 100,
    height: 100,
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
});

export default HomePage;
