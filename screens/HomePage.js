import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


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
  const [isWeekPlaneringVisible, setWeekPlaneringVisible] = useState(false);
  const [isShoppingListVisible, setShoppingListVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);

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
    'Snack Option 1',
    'Snack Option 2',
    'Snack Option 3',
  ];

  const lunchCategories = [
    'Lunch Option 1',
    'Lunch Option 2',
    'Lunch Option 3',
  ];
  const snacks2Categories = [
    'Snack Option 1',
    'Snack Option 2',
    'Snack Option 3',
  ];
  const dinnerCategories = [
    'Snack Option 1',
    'Snack Option 2',
    'Snack Option 3',
  ];

  const toggleDagensMenu = () => setDagensMenuVisible(!isDagensMenuVisible);
  const toggleWeekPlanering = () => setWeekPlaneringVisible(!isWeekPlaneringVisible);
  const toggleShoppingList = () => setShoppingListVisible(!isShoppingListVisible);
  const toggleSettings = () => setSettingsVisible(!isSettingsVisible);
  const dateAndDay = getCurrentDateAndDay();
  
  const navigateToPreviousPage = () => {
    // Implement navigation to the previous page here
    navigation.navigate('Welcome');
  };

  const navigateToNextPage = () => {
    // Implement navigation to the next page here
    navigation.navigate('BreakfastPage');
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
        <Text style={{ fontSize: 20, marginTop: 10 }}>Breakfast Menu</Text>
        <Picker
          selectedValue={selectedBreakfastCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedBreakfastCategory(itemValue)}
        >
          <Picker.Item label="Select a breakfast item" value={null} />
          {breakfastCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Snacks Menu</Text>
        <Picker
          selectedValue={selectedSnacksCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedSnacksCategory(itemValue)}
        >
          <Picker.Item label="Select a snacks item" value={null} />
          {snacksCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Lunch Menu</Text>
        <Picker
          selectedValue={selectedLunchCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedLunchCategory(itemValue)}
        >
          <Picker.Item label="Select a lunch item" value={null} />
          {lunchCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Snacks2 Menu</Text>
        <Picker
          selectedValue={selectedSnacks2Category}
          onValueChange={(itemValue, itemIndex) => setSelectedSnacks2Category(itemValue)}
        >
          <Picker.Item label="Select a Snacks2 item" value={null} />
          {snacks2Categories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Dinner Menu</Text>
        <Picker
          selectedValue={selectedDinnerCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedDinnerCategory(itemValue)}
        >
          <Picker.Item label="Select a Dinner item" value={null} />
          {dinnerCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <TouchableOpacity
          onPress={() => navigation.navigate('BreakfastPage')} 
          style={{ alignItems: 'center', margin: 20 }}
        >
          <Text style={{ fontSize: 18, color: 'blue' }}>Breakfast</Text>
        </TouchableOpacity>
      </ScrollView>


      <Overlay isVisible={isDagensMenuVisible} onBackdropPress={toggleDagensMenu}>
        <TouchableOpacity onPress={toggleDagensMenu}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Dagens Menu</Text>
        </TouchableOpacity>
        {isDagensMenuVisible && (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('BreakfastPage')}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Breakfast</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BreakfastPage')}>
              <Text style={{ fontSize: 18, color: 'blue' }}>Snacks1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Lunch</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Snacks2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Dinner</Text>
            </TouchableOpacity>
          </View>
        )}
      </Overlay>

      <Overlay isVisible={isWeekPlaneringVisible} onBackdropPress={toggleWeekPlanering}>
        <TouchableOpacity onPress={toggleWeekPlanering}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Week Planering</Text>
        </TouchableOpacity>
        {isWeekPlaneringVisible && (
          <View>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Monday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Tuesday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Wednesday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Thursday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Friday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Saturday</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontSize: 18, color: 'blue' }}>Sunday</Text>
            </TouchableOpacity>
          </View>
        )}
      </Overlay>

      <Overlay isVisible={isShoppingListVisible} onBackdropPress={toggleShoppingList}>
        {/* Implement Shopping List menu and options here */}
      </Overlay>

      <Overlay isVisible={isSettingsVisible} onBackdropPress={toggleSettings}>
        {/* Implement Settings menu and options here */}
      </Overlay>
    </View>
  );
          
};


export default HomePage;