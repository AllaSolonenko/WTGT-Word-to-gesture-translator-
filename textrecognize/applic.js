import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './inputScreen';
import FirstLaunchComponent from './firstLaunch';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
class MyStartingComponent extends React.Component {
    constructor(){
        super();
        this.state = {firstLaunch: null};
    }
    componentDidMount(){
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if(value == null){
                 AsyncStorage.setItem('alreadyLaunched', true); // No need to wait for `setItem` to finish, although you might want to handle errors
                 this.setState({firstLaunch: true});
            }
            else{
                 this.setState({firstLaunch: false});
            }}) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
    }
    render(){
       if(this.state.firstLaunch === null){
           return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
       }else if(this.state.firstLaunch == true){
           return <FirstLaunchComponent/>
       }else{
        <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen
            name="Переклад слів у жести"
            component={MainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
       }
}
}