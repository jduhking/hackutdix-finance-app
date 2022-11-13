import {Text} from'react-native'

function DetailScreen({route, navigation}){
    return(
        <Text>{route.params}</Text>
    );
}

export default DetailScreen