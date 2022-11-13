import {View, ActivityIndicator} from 'react-native'
import colors from './colors';
import {Constants} from 'expo-constants'

function AppActivityIndicator({animating}){

    return(
        <View style={{marginTop: 30}}>
            <ActivityIndicator size={'large'} color={"white"} animating={animating}/>
        </View>
    );
}

export default AppActivityIndicator