import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class CountingPage extends Component {

	//state itu temporary
	constructor(){
		super();
		this.state = {
			counter: 0
		}
	}

	handlePressCounter = () => {
		const newCounter = this.state.counter + 1;
		this.setState({
			counter: newCounter
		})
	}

	render(){
		return(
			<View>
				<TouchableOpacity onPress={this.handlePressCounter}>
					<Text>{this.state.counter}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default CountingPage;