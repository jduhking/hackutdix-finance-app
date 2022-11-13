import {Pressable, Text, StyleSheet, View} from 'react-native'
import {Foundation} from '@expo/vector-icons'
import colors from './colors';

function MoversComponent({Data,onpress}){
    return(
        <Pressable onPress={onpress} style={styles.container}>
            <Text>hello</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    /*container: {
        width:'70%',
        height: 70,
        borderWidth:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:16,
        borderRadius: 12,
        shadowColor:colors.pink,
        shadowOpacity:0.4,
        shadowRadius:13
    }*/
})

export default MoversComponent