import {useState} from 'react';
import {View,Text,TextInput, StyleSheet, FlatList, StatusBar,ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import colors from '../Components/colors';
import { dropdownData, topMovers } from '../DummyData.js/searchData';
import { validateYupSchema } from 'formik';
import ListSeperator from '../Components/ListSeperator';
import ListItem from '../Components/ListIstem';
import MoversComponent from '../Components/MoversComponent';
import axios from 'axios';
import AppActivityIndicator from '../Components/AppActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({navigation}){

    const [menuData, setMenuData] = useState([]);
    const [movers, setMovers] = useState(topMovers)
    const [showList, setShowList] = useState();
    const [isLoading, setIsLoading] = useState();
    const [noStock, setNostock] = useState();
    const [portfolio, setPortfolio] = useState([]);
    const [user, SetUser] = useState("");

    const handleSearch = (text) => {
        axios({
            method:'get',
            url:`https://hackutdix-finance-app-production.up.railway.app/search?q=${text}`,
            responseType:'json'
        })
        .then(function(response) {
           setMenuData(response.data.suggest['stock-suggest'][0].options)
           setIsLoading(false)

           if (!response.data.suggest['stock-suggest'][0].options.length) setNostock(true)
           if (response.data.suggest['stock-suggest'][0].options.length) setNostock(false)
        })
        .catch(function(error) {
            console.log(error)
        })

        if(text.length) setShowList(true)
        if(!text.length) setShowList(false)
    }

    const addStock = (tickr) => {
        const getData = async () => {
            try{
                const jsonValue = await AsyncStorage.getItem('@storage_key')
                return jsonValue != null ? SetUser(JSON.stringify(jsonValue)): null;
            }catch (e) {
                console.log(e)
            }
            axios({
                method:'post'
                url:'',
                data:{
                    username:user.username,
                    password:user.password,
                    ticker: tickr
                }
            })
            .then(function(response) {
    
            })
            .catch(function(error) {
                console.log(error)
            })
        }
    }



    return(
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    onChangeText={handleSearch}
                    placeholder={'Search Stock...'}
                    clearButtonMode={true}
                />
            </View>
            <View style={styles.innerView}>
                {!showList && 
                    <View style={{width:'100%', height:'100%', paddingTop: Constants.statusBarHeight }}> 
                        <Text style={{fontWeight:'700', fontSize:25, marginLeft:'25%'}}>Top Performers</Text>
                        <FlatList
                            data={movers}
                            renderItem={({item}) => <MoversComponent Data={item} onpress={()=> navigation.navigate('Details')}/>}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                }
                {
                    showList &&

                        <>
                            <AppActivityIndicator animating={isLoading}/>
                            <View style={{marginTop:-30}}/>
                            {noStock && <Text style={styles.emptyArray}>No stocks mactch 😞</Text>}
                            <FlatList
                                data={menuData}
                                renderItem={({item}) => <ListItem Data={item} onpress={()=> navigation.navigate('Details')} handleAdd={addStock(item._source.ticker)}/>}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={ListSeperator}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
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
    },
    emptyArray: {
        marginLeft:'30%',
        color:'#8F8F8F'
    }

})


export default HomeScreen;