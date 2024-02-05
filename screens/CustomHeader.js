import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ dateAndDay }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.dateAndDay}>{dateAndDay}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateAndDay: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
});

export default CustomHeader