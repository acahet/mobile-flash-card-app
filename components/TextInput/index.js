import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../../utils/styles';
import { white } from '../../utils/colors';

export default function TextInputSection({ onChangeText, value, placeholder }) {
	return (
		<TextInput
			style={(styles.card__text__input, { height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center' })}
			onChangeText={onChangeText}
			value={value}
			placeholder={placeholder}
			placeholderTextColor={white}
		/>
	);
}