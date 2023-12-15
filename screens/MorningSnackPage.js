import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MorningSnacksPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Morning Snacks</Text>
      
      <View style={styles.content}>
        <Text>1. Piece of Fruit (150grams)</Text>
        
        {/* Nice Picture */}
        <Image source={require('../assets/hero1.jpg')} style={styles.image} />
        
        {/* See Alternatives Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Alternatives</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 20,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MorningSnacksPage;