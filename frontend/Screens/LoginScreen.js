import React from 'react';
import {View,Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Seperator from '../Components/Seperators';
import AppButton from '../Components/AppButton';
import { Formik } from 'formik';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({navigation}){
    return(
        <View>
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={ ()=> navigation.navigate('Home')}
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