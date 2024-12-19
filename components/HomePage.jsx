import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const HomePage = () => {
    //const { username } = route.params;
    const navigation = useNavigation();
    const route = useRoute();

    const { username } = route.params || {};
  return (
    <ImageBackground
        source={require('../assets/images/bgImg.jpg')} 
        style={styles.background}
        resizeMode="cover"
    >
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {username}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    
  )
}

export default HomePage

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:"100vw",
        maxHeight:"100vh",
        width:"100%",
        height:"100%"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color:  'rgba(0,0,0,0.7)',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#a49d83',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 10,
        width: '100',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fcfaf5',
        fontSize: 16,
        fontWeight: 'bold',
    },
});