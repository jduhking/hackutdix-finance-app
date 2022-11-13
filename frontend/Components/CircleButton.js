import {TouchableOpacity} from 'react-native';
import colors from './colors';

function CircleButton({icon, onPress}){
    return(
        <TouchableOpacity onPress={onPress} >
            {icon}
        </TouchableOpacity>
    );
}


export default CircleButton