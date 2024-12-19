import { StyleSheet, Text, View, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native'
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
    <ImageBackground source={{uri: '' }} style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.title}>My Login App</Text>
            <TextInput
                style = {styles.input}
                placeholder='User Name'
                placeholderTextColor='#ddd'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style = {styles.input}
                placeholder='Password'
                placeholderTextColor='#ddd'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignments: 'center',
        padding: 20,
        width:'60%',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 30,
        backgroundColor: '#222',
        color: '#fff',
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#a49d83',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fcfaf5',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

//export default LoginPage;