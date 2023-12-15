// AfternoonSnacksPage.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AfternoonSnacksPage = () => {
  const navigation = useNavigation();

  const handleSeeAlternatives = () => {
    // Handle the action when the user clicks "See Alternatives"
    // You can navigate to another page or show alternatives in a modal, etc.
    // For now, let's just log a message.
    console.log('See Alternatives clicked!');
  };

  const handlePreviousPage = () => {
    // Handle the action when the user clicks "Previous"
    // You can navigate to the previous page or perform any other action.
    navigation.goBack(); // This assumes you're using React Navigation.
  };

  const handleNextPage = () => {
    // Handle the action when the user clicks "Next"
    // You can navigate to the next page or perform any other action.
    // For now, let's just log a message.
    console.log('Next clicked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Afternoon Snacks</Text>

      {/* Options */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>1. A piece of Fruits (150 grams)</Text>
        {/* Placeholder image, replace with actual image */}
        <Image source={require('../assets/hero2.jpg')}
          style={styles.optionImage}
        />
      </View>

      {/* "See Alternatives" button */}
      <TouchableOpacity style={styles.button} onPress={handleSeeAlternatives}>
        <Text style={styles.buttonText}>See Alternatives</Text>
      </TouchableOpacity>

      {/* Navigation buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.button} onPress={handlePreviousPage}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleNextPage}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default AfternoonSnacksPage