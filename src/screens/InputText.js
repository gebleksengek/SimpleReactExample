import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
//import ShowText from '../components/ShowText';
//import Input from '../components/Input';


class InputText extends Component {

	constructor(){
		super();
		this.state = {
			TextInputState: "",
			MainText: ""
		}
	}

	clickButton = () => {
		this.setState({
			MainText: this.state.TextInputState
		});
		this.InTex.clear();
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerState}>
					<Text>{this.state.MainText}</Text>
				</View>
				<View style={styles.containerInput}>
					<TextInput ref={input => {this.InTex = input}}
						placeholder="Type Here"
						style={styles.input}
						onChangeText={(TextInputState) => this.setState({TextInputState})}
					/>
					<Button color="green"
						title="Submit"
						onPress={this.clickButton}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	containerInput: {
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
	},
	containerState: {
		flex: 9,
		justifyContent: 'center',
		alignItems: 'center'
	}
})	

export default InputText;