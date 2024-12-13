import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import LoginPage from '../components/LoginPage'
import RegistrationPage from '../components/RegistrationPage'

const App = () => {
  return (
    <View>
      <LoginPage/>
      <RegistrationPage/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})

