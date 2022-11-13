import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import AccountScreen from "../Screens/AccountScreen";
import AdvisorScreen from "../Screens/AdvisorScreen";

function ScreenNavigator(props){
    
    const Stack = createNativeStackNavigator(); 

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Account' component={AccountScreen}/>
                <Stack.Screen name='Advisor' component={AdvisorScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ScreenNavigator;