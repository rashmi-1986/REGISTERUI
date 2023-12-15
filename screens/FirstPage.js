import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, ImageBackground, CheckBox, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from './CustomHeader';

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const FirstPage = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  // List of meals and days
  const mealsList = [
    'Breakfast',
    'Morning Snacks',
    'Lunch',
    'Afternoon Snacks',
    'Dinner',
    'Evening Snacks',
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // State to keep track of selected items for each day
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  const toggleItemSelection = (meal) => {
    const updatedSelectedItems = { ...selectedItems };

    if (updatedSelectedItems[selectedDay]) {
      if (updatedSelectedItems[selectedDay].includes(meal)) {
        updatedSelectedItems[selectedDay] = updatedSelectedItems[selectedDay].filter((item) => item !== meal);
      } else {
        updatedSelectedItems[selectedDay] = [...updatedSelectedItems[selectedDay], meal];
      }
    } else {
      updatedSelectedItems[selectedDay] = [meal];
    }

    setSelectedItems(updatedSelectedItems);
  };

  //const navigateToNextPage = () => {
    //navigation.navigate('NextPage');
  //};
   
  const dateAndDay = getCurrentDateAndDay();
  
  const navigateToPreviousPage = () => {
    navigation.navigate('Welcome');
  };

  const navigateToNextPage = () => {
    navigation.navigate('BreakfastPage');
  };

  const navigateToMorningSnackPage = () => {
    navigation.navigate('MorningSnackPage');
  };

  const navigateToItemPage = (item) => {
    
      console.log('Navigating to:', item);
      // ... rest of the code
    
    
    // Implement navigation to the specific page for the selected item
    switch (item) {
      case 'Breakfast':
        navigation.navigate('BreakfastPage');
        break;
        case 'HomePage':
        navigation.navigate('HomePage');
        break;
        case 'MorningSnacks':
        navigation.navigate('MorningSnacksPage');
        break;
      // Add cases for other items
      default:
        // Do nothing or navigate to a default page
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
    <Header
      leftComponent={
        <TouchableOpacity onPress={navigateToPreviousPage}>
          <Icon name="arrow-back" color="white" />
        </TouchableOpacity>
      }
      rightComponent={
        <TouchableOpacity onPress={navigateToNextPage}>
          <Icon name="arrow-forward" color="white" />
        </TouchableOpacity>
      }
      centerComponent={<CustomHeader dateAndDay={getCurrentDateAndDay()} />}
    />
      
    <Modal visible={isVisible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <ImageBackground source={require("../assets/hero2.jpg")} style={styles.backgroundImage}>
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.title}>Which Meals Do You Usually Have?</Text>
                <Text style={styles.subTitle}>(Mark the options that you most frequently choose)</Text>

                {mealsList.map((meal, mealIndex) => (
                  <View key={mealIndex} style={styles.snackItem}>
                    <CheckBox
                      value={selectedItems[selectedDay]?.includes(meal) || false}
                      onValueChange={() => toggleItemSelection(meal)}
                    />
                    <Text style={styles.snackText}>{meal}</Text>
                  </View>
                ))}

                <Text style={styles.daysTitle}>Days</Text>

                {daysOfWeek.map((day, dayIndex) => (
                  <TouchableOpacity key={dayIndex} style={styles.dayButton} onPress={() => setSelectedDay(day)}>
                    <Text style={styles.dayButtonText}>{day}</Text>
                    {selectedItems[day] && (
                      <View>
                        <Text style={styles.selectedItemsText}>
                          {selectedItems[day].join(', ')}
                        </Text>
                        {selectedItems[day].map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={styles.selectedItemLink}
                            onPress={() => navigateToItemPage(item)}
                          >
                            <Text style={styles.selectedItemLinkText}>{item}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </TouchableOpacity>
                ))}

                <TouchableOpacity style={styles.nextButton} onPress={navigateToNextPage}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
    </View>
  );
};
  


const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  snackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  snackText: {
    marginLeft: 10,
    fontSize: 16,
  },
  daysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  dayButton: {
    width: '80%',
    height: 40,  // Adjust the height to your preference
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 5,  // Adjust the padding to your preference
  },
  dayButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  selectedItemsText: {
    fontSize: 14,
    color: 'black',
  },
  selectedItemLink: {
    marginTop: 5,
  },
  selectedItemLinkText: {
    color: 'blue',
    textDecorationLine: 'underline',
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
    fontSize: 18,
  },
});

export default FirstPage;