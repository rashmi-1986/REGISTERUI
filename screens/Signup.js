import React, { useState } from 'react';

import { View, Text, Image, Pressable,TextInput, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../constants/colors';

import Checkbox from 'expo-checkbox';

import TermsAndConditions from './TermsAndConditions';

import { Ionicons } from '@expo/vector-icons';

import Button from '../components/Button';

import axios from 'axios';

import Toast from 'react-native-toast-message';



const Signup = ({ navigation }) => {

  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleTermsLinkPress = () => {
    navigation.navigate('TermsAndConditions');
  };



  const showToast = (type, text1, text2) => {

    Toast.show({

      type: type,

      text1: text1,

      text2: text2,

      position: 'center',

    });

  };

  const handleSignUp = async () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');


    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }


    // Validate password complexity
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be atleast 8 characters, contain 2 numbers, and have 1 special character');
      return;
    }


    try {
      const userData = {
        IDnumber: idNumber,
        username: email,
        password: password,
      };
      console.log('SignUp Payload:', userData);

      const response = await 
      axios.post('http://localhost:3000/auth/register', userData);

      console.log('User registration successful:', response.data);

      // Show success message
      showToast('success', 'Registration Successful', 'You have successfully registered. Now you can log in.'); 
      navigation.navigate('Login'); 
    } 
    catch (error) {
      console.error('Error signing up:', error);


      // Show error message
      showToast('error', 'Registration Failed', 'There was an error during registration. Please try again.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
            Create Account
          </Text>


          <Text style={{ fontSize: 16, color: COLORS.black }}>Connect with your friend today!</Text>
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>IDnumber</Text>


          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your ID number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={{
                width: '80%',
              }}
              value={idNumber}
              onChangeText={(text) => setIdNumber(text)}
            />
          </View>
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Username</Text>


          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{
                width: '100%',
              }}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailError('');
              }}
            />
            
            
          </View>
          {emailError ? (
            <Text style={{ color: COLORS.error, fontSize: 12 }}>{emailError}</Text>
          ) : null}
        </View>


        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '400', marginVertical: 8 }}>Password</Text>


          <View
            style={{
              width: '100%',
              height: 48,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.black}
              //secureTextEntry={true}
              secureTextEntry={!isPasswordShown}
              style={{
                width: '100%',
              }}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordError('');
              }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: 'absolute',
                right: 12,
              }}
            >
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={{ color: COLORS.error, fontSize: 12 }}>{passwordError}</Text>
          ) : null}
        </View>

        <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
        <Pressable onPress={handleTermsLinkPress}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 6,
              alignItems: 'left',
            }}
          >
            
            <Text>
              I agree to the{' '}
              <Text style={{ color: COLORS.primary, textDecorationLine: 'underline' }}>
                terms and conditions
              </Text>
            </Text>
          </View>
        </Pressable>

        <Button title="Signup" filled onPress={handleSignUp} />
{/* ... (unchanged code) */}
      
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
          </View>
      </View>
    </SafeAreaView>
  );
};


export default Signup;

