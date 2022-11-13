import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './Screens/HomeScreen';
import AccountScreen from './Screens/AccountScreen';
import AdvisorScreen from './Screens/AdvisorScreen';
import ListItem from './Components/ListIstem';
import MoversComponent from './Components/MoversComponent';

export default function App() {
    const Stack = createNativeStackNavigator(); 

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Home' component={HomeScreen} options={{gestureEnabled: false}}/>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Account' component={AccountScreen}/>
                <Stack.Screen name='Advisor' component={AdvisorScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});
