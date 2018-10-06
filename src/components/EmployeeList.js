import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Employee extends Component{

	handlePressItem = (item) => () => {
		alert(item + ' Pressed')
	}

	render(){
		return(
			<TouchableOpacity
				onPress={this.handlePressItem(this.props.name)}
			>
				<Text>{this.props.name}</Text>
			</TouchableOpacity>
		)
	}
}

class EmployeeList extends Component{

	// public
	employees = [
		'Mahar',
		'Dhiki',
		'Dhiki',
		'Rani'
	]
	// end

	// function
	// end function

	render(){
		// const employees = [
		// 	'Mahar',
		// 	'Dhiki',
		// 	'Rani'
		// ]

		return(
			<View style={styles.container}>
				{
					this.employees.map((item, index) => {
						return (
							<Employee name={item} key={index} />
						)
					})
				}
			</View>
		)
	}
}

export default EmployeeList;

const styles = StyleSheet.create({
	container: {
		flex: 3,
		backgroundColor: 'blue'
	}
})