import {StyleSheet, Pressable,Text, View} from 'react-native'
import React from 'react'
import CircleButton from './CircleButton';
import {AntDesign} from '@expo/vector-icons'
import colors from './colors';

function ListItem({onpress, Data}){
    return(
        <Pressable style={styles.container} onPress={onpress}>
            <View style={{justifyContent:'space-between', width:'80%', backgroundColor:'white', marginTop:30, flexDirection:'row', alignItems:'center', paddingHorizontal:20, height:60, borderRadius:15, shadowColor:colors.pink, shadowOpacity:0.4, shadowRadius:15}}>
                <View>
                    <Text style={{fontWeight:'500', fontSize:16, marginBottom:3}}>{Data.stock}</Text>
                    <Text style={{color:'#999999'}}>{Data.tickr}</Text>
                </View>
                <CircleButton
                    icon={<AntDesign name="pluscircleo" size={24} color={colors.green} />}
                    onPress={()=> console.log('puppy love')}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 70,
        alignItems:'center',
    }
})

export default ListItem;