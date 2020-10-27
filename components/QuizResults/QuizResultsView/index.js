import React from 'react';
import { View, Animated } from 'react-native';
import { styles } from '../../../utils/styles';
export default function QuizResultsView({ text, children, animation }) {
	return (
		<View style={styles.container__main}>
			<View style={styles.card__main}>
				<Animated.Text style={[styles.card__text, { transform: [{ scale: animation }] }]}>{text}</Animated.Text>
				{children}
			</View>
		</View>
	);
}