import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component{
	render(){
		const nameComponent = "Header";
		return(
			<View style={styles.container}>
				<Text>{nameComponent}</Text>
			</View>
		)
	}
}

export default Header;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'green'
	}
})