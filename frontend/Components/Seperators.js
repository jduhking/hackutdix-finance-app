import React from 'react';
import {View} from 'react-native';

function Seperator({...otherProps}){
    return(
        <View style={{margin:10, ...otherProps}}/>
    );
}


export default Seperator;