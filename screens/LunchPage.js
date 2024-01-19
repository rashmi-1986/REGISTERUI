import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LunchPage = () => {
  const navigation = useNavigation();

  const handleNextButtonPress = () => {
    // Navigate to the next screen (replace 'SecondPage' with your screen name)
    navigation.navigate('Dinner');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Page Title</Text>
      {/* Your page content goes here */}

      <TouchableOpacity style={styles.nextButton} onPress={handleNextButtonPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default LunchPage;