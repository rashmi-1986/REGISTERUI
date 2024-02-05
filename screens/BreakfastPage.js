import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
//import { useNavigation } from '@react-navigation/native';
//import CustomHeader from './CustomHeader';

const BreakfastPage = () => {
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);
  //const navigation = useNavigation();
  const breakfastIngredients = [
    'Yoghurt bowl with fruits: ',
    '1.  Natural yogurt - 1 cup(200g)',
    '2.  Muesli - 2 spoons(40g)',
    '3.  Seeds - 1 spoon(20g)',
    '4.  Fresh fruits - 1 cup(200g)',
  ];
  
  return (
    <View style={styles.container}>
      
     
      <Header
        leftComponent={
          <TouchableOpacity onPress={openAlternative}>
            <Icon name="menu" color="white" />
          </TouchableOpacity>
        }
        //centerComponent={<CustomHeader title="Breakfast" />}
      />
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
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
