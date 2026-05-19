import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from './Screens/Login';
import Home from './Screens/Home';
import AddProduto from './Screens/AddProduto';

function TabNavigate() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
  
      <Tab.Screen name="Home" component={Home}/>
     
    </Tab.Navigator>
  )
}

export default function App() {

    const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TabNavigate}/>
        <Stack.Screen name="AddProduto" component={AddProduto}/>
        

      </Stack.Navigator>

    </NavigationContainer>
  )
}


