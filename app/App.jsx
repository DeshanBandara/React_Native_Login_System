import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '../components/LoginPage'
import RegistrationPage from '../components/RegistrationPage'
import HomePage from '../components/HomePage'

const Stack = createStackNavigator();

const App = () => {
  return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Register' component={RegistrationPage} />
            <Stack.Screen name='Home' component={HomePage} />
        </Stack.Navigator>
    //<View>
      //<LoginPage/>
      //<RegistrationPage/>
      //<HomePage/>
    //</View>
  )
}

export default App

const styles = StyleSheet.create({})