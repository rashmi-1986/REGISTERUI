import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import TermsAndConditions from './TermsAndConditions';
import axios from 'axios'; // Import Axios

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleTermsLinkPress = () => {
    navigation.navigate('TermsAndConditions');
  };

  const handleSignUp = async () => {
    try {
      const userData = {
        
        IDnumber: idNumber,
        username: email,
        password: password,
      };

      console.log('SignUp Payload:', userData);

      // Adjust the API endpoint based on your backend
      const response = await axios.post('http://localhost:3000/auth/register', userData);

      console.log('User registration successful:', response.data);
      // Add navigation or other logic as needed
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error appropriately
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
              keyboardType="username"
              style={{
                width: '100%',
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
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
                secureTextEntry={isPasswordShown}
                style={{
                 width: '100%',
                          }}
                value={password}
                onChangeText={(text) => setPassword(text)}
/>

          </View>
        </View>

        {/* ... (Similar modifications for ID Number and Password fields) */}

        <Button
          title="Sign Up"
          filled
          onPress={handleSignUp}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />
         <View style={{ flexDirection: 'row', alignItems: 'center',
marginVertical: 20 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require('../assets/facebook.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require('../assets/google.png')}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center',
marginVertical: 22 }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Already
have an account</Text>
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

        {/* ... (Existing code) */}
      </View>
    </SafeAreaView>
  );
};

export default Signup;
