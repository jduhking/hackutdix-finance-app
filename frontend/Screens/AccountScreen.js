import React from 'react';
import {View,Text,TextInput, StyleSheet} from 'react-native';

function AccountScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>AccountScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default AccountScreen;