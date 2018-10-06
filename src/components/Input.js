import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, TextInput } from 'react-native';

class Input extends Component {
	render(){
		return (
			<View style={styles.container}>
				<TextInput placeholder="Type Here" style={styles.input}/>
				<Button color="green" title="Submit" onPress={() => alert('sadfdsf')} />
			</View>
		);
	}
}

export default Input;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingRight: 30,
		paddingLeft: 30
	},
	input: {
		borderWidth: 1,
		height: 35,
		width: 200,
		borderColor: 'black',
		color: 'black'
	}
})