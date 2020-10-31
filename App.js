import React from 'react';
import { View } from 'react-native';
import MainScreen from './textrecognize/inputScreen';
import FirstLaunchComponent from './textrecognize/firstLaunch';
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { firstLaunch: null, route: null };
  }
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  }

  _getRates = async () => {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstLaunch: true });
      }
      else {
        this.setState({ firstLaunch: false });
      }
    }) // Add some error handling, also you can simply do this.setState({fistLaunch: value == null})
  }

  newAs = async () => {
    setTimeout(() => {
     // console.log(this.state.firstLaunch)
      this.setState({ route: this.state.firstLaunch ? "Info" : "Main" });
    }, 5000)
  }

  componentDidMount() {
  // this.clearAsyncStorage()
    this._getRates();
    this.newAs()
  }
  Layout = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={this.state.route} screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen
            name="Info"
            component={FirstLaunchComponent}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  render() {
    const layout = this.Layout(this.newAs);
    return (this.state.route === null ? <View></View> : layout);
  }
}

