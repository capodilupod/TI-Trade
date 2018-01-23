import React from 'react';
import { Dimensions, StyleSheet, View, Image, Button, Text } from 'react-native';
import CityList from './CityList';
import Listing from './Listing';
import CreateListing from './CreateListing';
import AllListings from './AllListings';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cee3f8'
  },
  banner: {
    width,
    height: Math.floor(height * 0.2),
    marginTop: 20,
  }
});

const HomeScreen = ({ navigation }) => (

  <View style={styles.container}>
  	<Image source={require('../images/banner.jpg')} style={styles.banner} />
  	 <Button
		title="Create Trade Post +"
		color="red"
		onPress={() => navigation.navigate('CreateListing', 
			{navigation},{
				onGoBack: () => this.setState(this.state),
			})}
	/>
	<Text>Pull Down to Refresh</Text>
  	<AllListings />
  </View>
  );

export default HomeScreen;