import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Meteor from 'react-native-meteor';
import { Alert, Dimensions, View, ScrollView, Text, TextInput, Button, DatePickerIOS, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	inputField: {
		height: 40,  
		marginBottom: 5,
		textAlign: "center",
		fontSize: 12
	},
	inputHeader: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 14
	}
})

export default class CreateListing extends Component {
	constructor(props){
		super(props);
		console.log(this.props.navigation);

		this.state = {
			showDatePicker: false,
			date: new Date(),
			haveItems: null,
			wantItems: null,
			location: null,
			description: null,
		}

		this.onSubmit = this.onSubmit.bind(this);
	}

	onPress(){
		this.setState({showDatePicker: !this.state.showDatePicker})
	}

	onDateChange(date){
    	this.setState({date: date});
  	}

  	onSubmit(){

  		let {date, haveItems, wantItems, location, description } = this.state;


  		time = date.getTime();
  		date = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

		const { navigation } = this.props;
  		if(this.state.haveItems && wantItems && haveItems && location && description){
  			Meteor.call('links.create', date, time, haveItems, wantItems, location, description, (err) =>{
  			});

  			navigation.goBack();
  			
  		}
  		else{
  			if(!haveItems){
  				errMessage = "Enter Items You Have To Trade"
  			}
  			if(!wantItems){
  				errMessage = "Enter Items You Are Looking For"
  			}
  			if(!location){
  				errMessage = "Please Enter the Location You'll Be At"
  			}
  			if(!description){
  				errMessage = "Please Enter a Small Description";
  			}

  			Alert.alert(
			  'Missing Field',
			  errMessage,
			  [
			    {text: 'OK'},
			  ],
			  { cancelable: false }
			)
  		}
  	}




	render() {
		let DatePicker
		if(this.state.showDatePicker){
			DatePicker = <DatePickerIOS
				mode="time"
				date={this.state.date}
				onDateChange={(date) => {this.setState({date: date})}}
			/>
		}
		else{
			DatePicker = null;
		}

		return(
			<ScrollView>
			<Text style={styles.inputHeader}>What Do You Have To Trade?</Text>
			<TextInput
				style={styles.inputField}
				onChangeText={(text) => {this.setState({haveItems: text})}}
				maxLength={140}
				multiline={true}
				placeholder="List What Items You Have"
				/>
			<Text style={styles.inputHeader}>What Are You Looking For?</Text>
			<TextInput
				style={styles.inputField}
				onChangeText={(text) => {this.setState({wantItems: text})}}
				maxLength={140}
				multiline={true}
				placeholder="List Items You Are Looking For"
				/>
			<Text style={styles.inputHeader}>Where Will You Be?</Text>
			<TextInput
				style={styles.inputField}
				onChangeText={(text) => {this.setState({location: text})}}
				maxLength={140}
				multiline={true}
				placeholder="Enter Your Location"
				/>
			<Text style={styles.inputHeader}>Description</Text>
			<TextInput
				style={styles.inputField}
				onChangeText={(text) => {this.setState({description: text})}}
				maxLength={140}
				multiline={true}
				placeholder="e.g. What You Are Wearing, First Name, etc."
				/>
			<Button
			 	title="Set Time To Be There"
				color="#841584"
				accessibilityLabel="Learn more about this purple button"
				onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}
			/>
			{DatePicker}
			<Text style={styles.inputHeader}>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
			<Button
				title="Submit Trade Post"
				color="#841584"
				onPress={this.onSubmit}
				/>
			<Image source={require('../images/shopkeeper.jpg')} style={{width: width}}/>


			</ScrollView>
			)
	}
}