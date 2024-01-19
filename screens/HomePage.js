import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native';

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const HomePage = () => {
  const [selectedBreakfastCategory, setSelectedBreakfastCategory] = useState(null);
  const [selectedSnacksCategory, setSelectedSnacksCategory] = useState(null);
  const [selectedLunchCategory, setSelectedLunchCategory] = useState(null);
  const [selectedSnacks2Category, setSelectedSnacks2Category] = useState(null);
  const [selectedDinnerCategory, setSelectedDinnerCategory] = useState(null);

  const [isDagensMenuVisible, setDagensMenuVisible] = useState(false);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [selectedDagensMenuItem, setSelectedDagensMenuItem] = useState(null);

  const navigation = useNavigation();

  const breakfastCategories = [
    'A cup of milk (200 ml)',
    'A cup of unsweetened vegetal milk (oat, soy, rice, almond) (200 ml)',
    'Unsweetened breakfast cereals (20 g), muesli (20 g), or rolled oats',
    'Unsweetened low-fat yoghurt (or low-fat Greek yoghurt)',
    'A piece of fruit (or two small ones)',
    'Unsalted nuts (walnuts, almonds, etc.) (30 g)',
    'A glass of a freshly-made smoothie',
    'An orange squash (with lime and/or lemon)',
    'Unsweetened dried fruit (apricots, figs, etc.) (30 g)',
    'A glass of unsweetened fruit juice',
    'Chickpea pancakes with jam',
    'Some vegetables',
  ];

  const snacksCategories = [
    'A piece of fruit (150 g)',
    'Unsalted nuts (walnuts, almonds, etc.) (30 g)',
    'A jar of sugar-free plain yogurt (125 g) with a spoonful of berries',
    'Lupins (30 g)',
    'A cup of tea with milk (regular or vegetal)',
    'A hard-boiled egg',
    'A glass of unsweetened vegetal milk',
  ];

  const lunchCategories = ['Lunch Option 1', 'Lunch Option 2', 'Lunch Option 3'];
  const snacks2Categories = ['Snack Option 1', 'Snack Option 2', 'Snack Option 3'];
  const dinnerCategories = ['Snack Option 1', 'Snack Option 2', 'Snack Option 3'];

  const toggleDagensMenu = () => {
    setDagensMenuVisible(!isDagensMenuVisible);
    if (isSubMenuVisible) {
      toggleSubMenu();
    }
  };

  const toggleSubMenu = () => setSubMenuVisible(!isSubMenuVisible);

  const dateAndDay = getCurrentDateAndDay();

  const navigateToPreviousPage = () => {
    navigation.navigate('Welcome');
  };

  const navigateToNextPage = () => {
    navigation.navigate('BreakfastPage');
  };

  const navigateToFirstPage = () => {
    navigation.navigate('FirstPage');
  };

  const navigateToMenuSelection = () => {
    // Replace 'MenuSelectionPage' with the actual page you want to navigate to.
    navigation.navigate('MenuSelectionPage', {
      breakfastCategory: selectedBreakfastCategory,
      snacksCategory: selectedSnacksCategory,
      lunchCategory: selectedLunchCategory,
      snacks2Category: selectedSnacks2Category,
      dinnerCategory: selectedDinnerCategory,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleDagensMenu}>
              <Icon name="menu" color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPreviousPage}>
              <Icon name="arrow-back" color="white" />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <TouchableOpacity onPress={navigateToNextPage}>
            <Icon name="arrow-forward" color="white" />
          </TouchableOpacity>
        }
        centerComponent={<CustomHeader dateAndDay={dateAndDay} />}
      />

      <ScrollView>
        {/* Your existing code for rendering pickers goes here */}
      </ScrollView>

      {/* Dagens Menu Overlay */}
      {isDagensMenuVisible && (
        <Overlay
          isVisible={isDagensMenuVisible}
          onBackdropPress={toggleDagensMenu}
          overlayStyle={{ width: '80%', height: '80%', padding: 20 }}
        >
          <View>
            {dagensMenuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedDagensMenuItem(item);
                  toggleSubMenu();
                }}
              >
                <Text style={{ fontSize: 18, color: 'blue' }}>
                  {item}{' '}
                  {isSubMenuVisible ? (
                    <Icon name="angle-up" type="font-awesome" />
                  ) : (
                    <Icon name="angle-down" type="font-awesome" />
                  )}
                </Text>
              </TouchableOpacity>
            ))}
            {isSubMenuVisible &&
              subMenuItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('MorningSnackPage')}>
                  <Text style={{ fontSize: 18, color: 'blue' }}>{item}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </Overlay>
      )}
    </View>
  );
};

export default HomePage;
