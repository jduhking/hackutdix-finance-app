import {useState} from 'react';
import {View,Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Seperator from '../Components/Seperators';
import AppButton from '../Components/AppButton';
import { Formik } from 'formik';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

function LoginScreen({navigation}){

    const [loginAllowed, setLoginAllowed] = useState(null);

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
      }

    const loginSubmit = (credentials) => {
        console.log(credentials)
        axios({
            method:'post',
            url:'https://hackutdix-finance-app-production.up.railway.app/auth',
            responseType:'json',
            data:credentials
        })
        .then(function(response) {
            if (response.status == 200 || response.status == 201)
            {
                storeData(credentials)
                setLoginAllowed(true)
                navigation.navigate('Home')
            }
            else setLoginAllowed(false)
        })
        .catch(function(error) {
            console.log(error)
        })

    }
    return(
        <View>
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={(values)=> loginSubmit(values)}
            >
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View style={styles.container}>
                        <View style={styles.inputBox}>
                            <TextInput
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                placeholder={'Username'}
                            />
                        </View>
                        <Seperator/>
                        <View style={styles.inputBox}>
                            <TextInput
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder={'Password'}
                            />
                        </View>
                        <Seperator marginTop={20}/>
                        <AppButton text={'GET STARTED'} onPress={handleSubmit}/>
                        {!loginAllowed && <Text style={{marginTop:7}}>Username or Password is incorrect</Text>}

                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox: {
        width:'80%',
        height:40,
        padding: 10,
        borderWidth: 2,
        borderRadius:7,
        justifyContent:'center'
        
    }
})


export default LoginScreen;