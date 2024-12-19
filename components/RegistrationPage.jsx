import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useEffect, useState} from 'react'

const RegistrationPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setCPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formstate, setFormstate] =  useState(false);
    useEffect(() => {

    },[username, email, password, confirmPassword])

    const formValidation = () => {
        let errorObject = {}
        if(!username){
            errorObject.username = 'User name is required!';
        }
        if(!email){
            errorObject.username = 'Email is required!';
        }else if(!/\S+@\S+\.\+/.test(email)){
            errorObject.email='Entered email type is wrong. please enter again'
        }
        if(!password){
            errorObject.username = 'Password is required!';
        }else if (password.length<6){
            errorObject.password = 'Password must be upto 6 characters';
        }
        setErrors(errorObject);
        //setFormstate(Object.keys(errorObject).length === 0);
    }
    const handleRegister = () => {
        //if (formstate){
        //    
        //}
        //else {
        //    alert ('Form submission is unsuccesfull. please try again!')
        //}

        if(password === confirmPassword) {
            if (username && password)
            {
                alert('Regitration Successful!');
                navigation.navigate('Login');
            } else {
                alert ('Please fill out all fields!');
            }
        } else {
            alert ('Please double check passwords!');
        }
        
    };

  return (
    <ImageBackground
        source={require('../assets/images/bgImg.jpg')} 
        style={styles.background}
        resizeMode="cover"
    >
        <View style={styles.container}>
      <Text style={styles.title}>My Login App</Text>
      <TextInput
        style={styles.input}
        placeholder='User Name'
        placeholderTextColor='#ddd'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#ddd'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        placeholderTextColor='#ddd'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        placeholderTextColor='#ddd'
        secureTextEntry
        value={confirmPassword}
        onChangeText={setCPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

export default RegistrationPage

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
        alignments: 'center',
        padding: 20,
        width:'60%',
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)',
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