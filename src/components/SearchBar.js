import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SearchBar extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>{this.props.placeholder}</Text>
			</View>
		)
	}
}

export default SearchBar;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'yellow'
	}
})