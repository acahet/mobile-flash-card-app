import React, { Component, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// You can import from local files
import middleware from './middleware';
import Constants from 'expo-constants';

import StatusBarDisplay from './components/StatusBarDisplay';
import NavigationSection from './components/Navigation/index';
import { handleInitialData } from './actions';
// or any pure javascript modules available in npm
import { resetDecksAsync } from './utils/_DATA';
import { white } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
const store = createStore(reducer, middleware);

class App extends Component {
	componentDidMount() {
		store.dispatch(handleInitialData());
		// this.setNotification
	}
	// setNotification = () =>{
	// 	useEffect(()=>{
	// 		setLocalNotification()
	// 	}, []);
	// }
	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={styles.container}>
					<StatusBarDisplay backgroundColor={white} />
					<NavigationContainer>
						<NavigationSection />
					</NavigationContainer>
				</SafeAreaView>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default App;