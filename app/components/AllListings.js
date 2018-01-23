import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Listing from './Listing';
import Meteor from 'react-native-meteor';


export default class AllListings extends Component {
	constructor(props){
		super(props);

		this.state ={
			loading: true,
			listings: null,
			refreshing: false
		}
	};

	componentDidMount(){
		Meteor.call('links.getListings', (err, listings) => {
				if(!err){
					console.log(listings);
					this.setState({listings: listings});
				}
			})
		this.setState({ loading: false});
	}

	updateListings(){
		this.setState({refreshing: true});
		Meteor.call('links.getListings', (err, listings) => {
				if(!err){
					console.log(listings);
					this.setState({listings: listings});
				}
			})
		this.setState({refreshing: false});

	}


	render(){
		console.log(this.state);
		let listings = this.state.listings
		if(!this.state.loading){
			if(listings != null){
			listings = listings.map(listing => (
				<Listing
					key={listing._id}
					description={listing.description}
					haveItems={listing.haveItems}
					wantItems={listing.wantItems}
					location={listing.location}
					time={listing.date}
				/>
				))
			}
		}

		return(
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={this.updateListings.bind(this)}
					/>
					}>
			{listings}
			<Text>Dota 2 content and materials are trademarks and copyrights of Valve or its licensors. All rights reserved.</Text>
			</ScrollView>
			)
	}

}


