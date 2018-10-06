import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ShowText extends Component {
	constructor(){
		super();
		this.state = {
			text: "",
			text2: ""
		}
	}

	Click = () => {
		newText2 = this.state.text;
		this.setState({
			text2: newText2
		});
		this.InTex.clear();
	}

	render(){
		return(
			<View style={styles.container}>
				<Text>{this.state.text2}</Text>
			</View>
		);
	}
}

export default ShowText;

const styles = StyleSheet.create({
	container: {
		flex: 9,
		justifyContent: 'center',
		alignItems: 'center'
	}
})