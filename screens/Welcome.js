import React from 'react';
import { View, Text, Pressable, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    return (
       
        <LinearGradient
            style={styles.container}
            colors={[COLORS.secondary, COLORS.primary]}
        >
    <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require("../assets/nuts.jpg")}
                        style={styles.image}
                    />
                    <Image
                        source={require("../assets/hero3.jpg")}
                        style={styles.image}
                    />
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={styles.image}
                    />
                    <Image
                        source={require("../assets/hero2.jpg")}
                        style={[styles.image, { height: 100, width: 100 }]}
                    />
                </View>

                <Text style={styles.title}>Let's Get Started</Text>
                <Text style={styles.subtitle}>Start to Diet Control</Text>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>Eat to Nourish Your Cells</Text>
                    <Text style={styles.description}>Nothing Tastes As Good As Healthy Feels</Text>
                </View>

                

                <Button
                    title="Join Now"
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.button}
                />
                <Button
                    title="Meal Selection Page"
                    onPress={() => navigation.navigate("MealSelectionPage")}
                    style={styles.button}
                />
                
                
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={[styles.loginText, styles.bold]}>Login</Text>
                    </Pressable>
                </View>
            
            </ScrollView>
        </LinearGradient>
       
       

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flex: 1, // Ensure the button container takes up all available space
        justifyContent: 'center', // Center the buttons vertically
        alignItems: 'center', // Center the buttons horizontally
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
        marginBottom: 20,
        textAlign: 'center',
    },
    descriptionContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        color: COLORS.white,
        marginBottom: 4,
        textAlign: 'center',
    },
    button: {
        width: '50%',
        marginBottom: 5,
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 18,
    },
    loginText: {
        fontSize: 14,
        color: COLORS.white,
    },
    bold: {
        fontWeight: 'bold',
        marginLeft: 4,
    },
});

export default Welcome;
