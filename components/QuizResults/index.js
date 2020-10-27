import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../utils/styles';
import QuizResultsView from './QuizResultsView';
export default function QuizResultsContainer({ text, onPress, title, children, animation }) {
	return (
		<QuizResultsView text={text} animation={animation}>
			<TouchableOpacity style={styles.card__button} onPress={onPress}>
				<View style={styles.card__button_text}>
					<Text style={styles.card__button_text}>{title}</Text>
				</View>
			</TouchableOpacity>
			{children}
		</QuizResultsView>
	);
}