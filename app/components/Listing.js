import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	heading: {
		fontWeight: 'bold',
		fontSize: 14
	},
	info: {
		fontWeight: 'normal',
		fontSize: 12
	}
})

const listingText = (description, haveItems, wantItems, location, time) => (
	<View style={{padding: 4}}>
		<Text style={styles.heading}>
			Have To Trade: 
			<Text style={styles.info}> {haveItems} </Text>
		</Text>
		<Text style={styles.heading}>
			Want:
			<Text style={styles.info}> {wantItems} </Text>
		</Text>
		<Text style={styles.heading}>
			Where: 
			<Text style={styles.info}> {location} </Text>
		</Text>
		<Text style={styles.heading}>
			When:
			<Text style={styles.info}> {time} </Text>
		</Text>
		<Text style={styles.heading}>
			Description:
			<Text style={styles.info}> {description} </Text>
		</Text>



	</View>
	)

const Listing = ({ description, haveItems, wantItems, location, time }) => (
	<View style={{borderWidth: 1, borderColor: "#7f98a8"}}> 
		{listingText(description, haveItems, wantItems, location, time)}
	</View>
)

export default Listing;