import React from 'react';
import {View,Text,TextInput, StyleSheet} from 'react-native';

function AdvisorScreen({navigaton}){
    return(
        <View style={styles.container}>
            <Text>AdvisorScreen</Text>
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


export default AdvisorScreen;