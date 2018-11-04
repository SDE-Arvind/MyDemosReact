/** @format */

import {AppRegistry} from 'react-native';
import HomeScreen from './src/HomeScreen';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
import DetailScreen from "./src/DetailScreen";
import React, {Component} from "react";

console.disableYellowBox = true;

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        Details: {
            screen: DetailScreen,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        initialRouteName: 'Home',
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default class App extends Component {
    render() {
        return <RootStack/>;
    }
}


AppRegistry.registerComponent(appName, () => App);
