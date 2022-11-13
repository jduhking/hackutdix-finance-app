import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";


function ScreenNavigator(props){
    
    const Stack = createNativeStackNavigator(); 

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Details' component={DetailScreen} options={{presentation:'modal'}}/>
        </Stack.Navigator>


    );
}

export default ScreenNavigator;