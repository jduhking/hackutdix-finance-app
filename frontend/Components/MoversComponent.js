import {Pressable, Text, StyleSheet, View} from 'react-native'
import {Foundation} from '@expo/vector-icons'
import colors from './colors';

function MoversComponent({Data,onpress}){
    return(
        <Pressable onPress={onpress} style={styles.container}>
            <View style={{justifyContent:'space-between', width:'80%', backgroundColor:'white', marginTop:30, flexDirection:'row', alignItems:'center', paddingHorizontal:20, height:60, borderRadius:15, shadowColor:colors.pink, shadowOpacity:0.4, shadowRadius:15}}>
                <View>
                    <Text style={{fontSize:15, fontWeight:'600'}}>{Data.stock}</Text>
                    <Text style={{ fontWeight:'300'}}>{Data.tickr}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Foundation name="arrow-up" size={30} color={colors.green} />
                    <Text style={{fontWeight:'600', color:'#519E84', marginLeft: 5, fontSize:20}}>{Data.priceChange}%</Text>
                </View>
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

export default MoversComponent