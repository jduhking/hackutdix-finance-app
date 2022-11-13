import {StyleSheet, Pressable,Text, View} from 'react-native'
import {useState} from 'react'
import CircleButton from './CircleButton';
import {AntDesign} from '@expo/vector-icons'
import colors from './colors';



function ListItem({onpress, Data, handleAdd}){

    return(
        <Pressable style={styles.container} onPress={onpress}>
            <View style={{justifyContent:'space-between', width:'80%', backgroundColor:'white', marginTop:30, flexDirection:'row', alignItems:'center', paddingHorizontal:20, height:60, borderRadius:15, shadowColor:colors.pink, shadowOpacity:0.8, shadowRadius:15}}>
                <View>
                    <Text style={{fontWeight:'500', fontSize:16, marginBottom:3, numberOfLines:1}}>{Data._source.name}</Text>
                    <Text style={{color:'#999999'}}>{Data._source.ticker}</Text>
                </View>
                <CircleButton
                    icon={<AntDesign name="pluscircleo" size={24} color={colors.green} />}
                    onPress={()=> handleAdd}
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