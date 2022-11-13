import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenNavigator from './Navigators/ScreenNavigators';
import { NativeModules } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './Screens/AccountScreen';
import AdvisorScreen from './Screens/AdvisorScreen';
import { NavigationContainer } from '@react-navigation/native';
import {Fontisto, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';
NativeModules.DevSettings.setIsDebuggingRemotely(false);
import colors from './Components/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen'

export default function App() {
    const Tab = createBottomTabNavigator(); 
    
    function HomeTabs() {
      <>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
              name="Home" 
              component={ScreenNavigator}
              options={{tabBarIcon: ({color, size})=> 
                <Fontisto name="home" size={24} color={colors.blue} />
              }}/>
            <Tab.Screen 
              name='Advisor' 
              component={AdvisorScreen}
              options={{tabBarIcon: ({color, size})=> 
                <Entypo name="bar-graph" size={24} color={colors.blue}/>
              }}
              />
            <Tab.Screen 
              name='Account' 
              component={AccountScreen}
              options={{tabBarIcon: ({color, size})=> 
                <MaterialCommunityIcons name="account" size={27} color={colors.blue}/>
              }}
              />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    }

    const Stack = createNativeStackNavigator(); 

    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={LoginScreen} options={{presentation:'modal'}}/>
            <Stack.Screen name='Home' component={HomeScreen} options={{gestureEnabled:false}} />
            <Stack.Screen name='Details' component={DetailScreen} options={{presentation:'modal'}}/>
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
