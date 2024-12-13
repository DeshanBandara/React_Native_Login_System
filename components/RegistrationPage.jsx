import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const RegistrationPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if(username && password) {
            alert('Regitration Successful!');
            navigation.navigate('Login');
        } else {
            alert ('Please fill out all fields!');
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder='User Name'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title='Register' onPress={handleRegister} />
      <Button title='Back to Login' onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default RegistrationPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignments: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});