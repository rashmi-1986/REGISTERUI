import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native';

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const DinnerPage = () => {
  const navigation = useNavigation();
  const dateAndDay = getCurrentDateAndDay();

  const navigateToPreviousPage = () => {
    // Replace 'Welcome' with the appropriate screen to navigate back
    navigation.navigate('Welcome');
  };

  const navigateToNextPage = () => {
    // Replace 'NextPage' with the appropriate screen to navigate forward
    navigation.navigate('NextPage');
  };

  const navigateToHomePage = () => {
    // Replace 'HomePage' with the appropriate screen to navigate to the home page
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
      {/* Your DinnerPage content goes here */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Dinner Page Content</Text>
      </View>
    </View>
  );
};

export default DinnerPage;
