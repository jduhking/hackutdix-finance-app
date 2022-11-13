import React from 'react';
import {View,Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import colors from './colors';

function AppButton({onPress,text, ...otherProps}){
    return(
        <TouchableOpacity style={{width:'80%',
            height: 50,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: colors.green,
            borderRadius: 7,
            ...otherProps
            }} onPress={onPress}>
            <Text style={{color:'white'}}>{text}</Text>
        </TouchableOpacity>
    );
}



export default AppButton;