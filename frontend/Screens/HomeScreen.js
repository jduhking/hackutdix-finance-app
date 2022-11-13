import {useState} from 'react';
import {View,Text,TextInput, StyleSheet, FlatList, StatusBar} from 'react-native';
import Constants from 'expo-constants';
import colors from '../Components/colors';
import { dropdownData, topMovers } from '../DummyData.js/searchData';
import { validateYupSchema } from 'formik';
import ListSeperator from '../Components/ListSeperator';
import ListItem from '../Components/ListIstem';
import MoversComponent from '../Components/MoversComponent';


function HomeScreen(props){

    const [menuData, setMenuData] = useState(dropdownData);
    const [movers, setMovers] = useState(topMovers)
    const [showList, setShowList] = useState();

    const handleSearch = (text) => {
        console.log(text)
        if(text.length) setShowList(true)
        if(!text.length) setShowList(false)
    }



    return(
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    onChangeText={handleSearch}
                    placeholder={'Search Stock...'}
                />
            </View>
            <View style={styles.innerView}>
                {!showList && 
                    <View style={{width:'100%', height:'100%', alignItems:'center', paddingTop: Constants.statusBarHeight }}> 
                        <Text style={{fontWeight:'700', fontSize:25}}>Top Performers</Text>
                        <FlatList
                            data={movers}
                            renderItem={({item}) => <MoversComponent Data={item}/>}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                }
                {
                    showList &&

                        <FlatList
                            data={menuData}
                            renderItem={({item}) => <ListItem Data={item}/>}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={ListSeperator}
                            showsVerticalScrollIndicator={false}

                        />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        zIndex:-1,
        backgroundColor:'#F5F5F5'
    },
    searchBox: {
        width: '75%',
        marginTop: Constants.statusBarHeight + 30,
        borderWidth:2,
        height: 40,
        justifyContent:'center',
        paddingHorizontal: 15,
        borderRadius:10,
    },
    innerView:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        backgroundColor:colors.sage,
        marginTop:Constants.statusBarHeight,
        zIndex:1
    }

})


export default HomeScreen;