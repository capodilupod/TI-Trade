import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CreateListing from './CreateListing';
import Meteor from 'react-native-meteor';
import React from 'react';


Meteor.connect('wss://stackfinder.meteorapp.com/websocket');


const Navigator = StackNavigator({
	Home: { 
		screen: HomeScreen,
		navigationOptions: {
			header: null
		}
	},
	CreateListing: { 
		screen: CreateListing,
		navigationOptions: {
			title: "Create A Post"
		}
	},
});

export default Navigator