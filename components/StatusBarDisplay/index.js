import React from 'react';
import { View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

export default function StatusBarDisplay({ backgroundColor, ...props }) {
	return (
		<View style={{ height: Constants.statusBarHeight }}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	);
}