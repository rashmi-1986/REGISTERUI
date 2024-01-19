import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native'

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const EveningSnackPage = () => {
  const [selectedSnacksCategory, setSelectedSnacksCategory] = useState(null);
  const navigation = useNavigation();

  const snacksCategories = [
    'A piece of fruit (150 g)',
    'Unsalted nuts (walnuts, almonds, etc.) (30 g)',
    'A jar of sugar-free plain yogurt (125 g) with a spoonful of berries',
    'Lupins (30 g)',
    'A cup of tea with milk (regular or vegetal)',
    'A hard-boiled egg',
    'A glass of unsweetened vegetal milk',
  ];

  const dateAndDay = getCurrentDateAndDay();

  const navigateToPreviousPage = () => {
    navigation.navigate('Dinner');
  };

  const navigateToNextPage = () => {
    navigation.navigate('Welcome');
  };

  const navigateToHomePage = () => {
    navigation.navigate('HomePage');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={navigateToHomePage}>
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
      {/* Rest of your component content */}
    </View>
  );
};

export default EveningSnackPage;
