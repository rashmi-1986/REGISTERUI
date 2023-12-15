import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import COLORS from '../constants/colors';


const TermsAndConditions = () => {
  return (
    <ScrollView style={{ padding: 20 }}>
      {/* Your terms and conditions content goes here */}
      <Text style={{ fontSize: 18, marginBottom: 10, color: COLORS.black }}>
        1. These are the terms and conditions.
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: COLORS.black }}>
        2. More terms and conditions.
      </Text>
      
    </ScrollView>
  );
};

export default TermsAndConditions;