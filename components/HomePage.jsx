import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const HomePage = () => {
    //const { username } = route.params;
    const navigation = useNavigation();
    const route = useRoute();

    const { username } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
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
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#a49d83',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 10,
        width: '25%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fcfaf5',
        fontSize: 16,
        fontWeight: 'bold',
    },
});