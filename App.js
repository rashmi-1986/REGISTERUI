import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, HomePage, BreakfastPage, TermsAndConditions, FirstPage, MorningSnackPage, LunchPage, AfternoonSnackPage, EveningSnackPage, DinnerPage } from "./screens";
import Toast from 'react-native-toast-message';
import { View, StatusBar } from 'react-native';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name="BreakfastPage"
          component={BreakfastPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="MorningSnackPage"
          component={MorningSnackPage}
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="LunchPage"
          component={LunchPage}
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="AfternoonSnackPage"
          component={AfternoonSnackPage}
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="EveningSnackPage"
          component={EveningSnackPage}
          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="DinnerPage"
          component={DinnerPage}
          options={{
            headerShown: false
          }}
          />
          
          </Stack.Navigator>
          
          <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {/* Your MenuPage Component */}
        {/* You can include the MenuPage component here or use it within the navigation */}
        {/* <MenuPage /> */}
        <Toast />
      </View>
    </NavigationContainer>
  );
};


