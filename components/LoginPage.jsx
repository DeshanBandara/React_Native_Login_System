import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const LoginPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('Home', {username});
        }else{
            alert('Please enter valid credentials!');
        }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style = {styles.input}
        placeholder='User Name'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style = {styles.input}
        placeholder='Password'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title='Login' onPress={handleLogin}/>
      <Button title='Register' onPress={() => navigation.navigate('Register')}/>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold'
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

//export default LoginPage;