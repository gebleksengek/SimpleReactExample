// import React, {Component} from 'react';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';

// component
// class HomePage extends Component{
// 	render(){
// 		return(
// 			<View>
// 				<Header />
// 				<SearchBar />
// 				<ListItem />(
// 			</View>
// 		)
// 	}
// }

// stateless component
const HomePage = () => {
	return (
		<View style={styles.container}>
			<Header />
			<SearchBar placeholder="Search"/>
			<EmployeeList />
		</View>
	)
}

export default HomePage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	}
})