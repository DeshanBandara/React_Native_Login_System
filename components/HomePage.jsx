import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomePage = ({ route, navigation}) => {
    const { username } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}</Text>
      <Button title='Logout' onPress={() => navigation.navigate('Login')} />
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
});