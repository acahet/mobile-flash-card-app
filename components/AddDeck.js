import React from 'react';
import { View, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { _addNewDeckByTitle } from '../utils/_DATA';
import { styles } from '../utils/styles';
import TextInputSection from './TextInput/index';
import {
	SCREEN_NAME_DECK_VIEW,
	ADD_DECK_CREATE_TEXT,
	ADD_DECK_PLACEHOLDER_TEXT,
	ADD_DECK_CREATE_BTN,
} from '../utils/constants';
class AddDeck extends React.Component {
	state = {
		title: '',
	};

	handleAddDeck = () => {
		const { title } = this.state;
		if (title !== '') {
			_addNewDeckByTitle(title);
			this.props.dispatch(addNewDeck(title));
			this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, { entryId: title });
			this.setState(() => ({
				title: '',
			}));
		}
	};
	render() {
		const { title } = this.state;
		return (
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container__main}>
				<View style={styles.card__main}>
					<View style={styles.card__text__container}>
						<Text style={styles.card__text}> {ADD_DECK_CREATE_TEXT} </Text>
					</View>
					<View style={styles.card__text__input__container}>
						<TextInputSection
							onChangeText={(title) => this.setState({ title: title })}
							placeholder={ADD_DECK_PLACEHOLDER_TEXT}
							value={title}
						/>
					</View>
					<View>
						<TouchableOpacity
							style={
								styles.card__button__enabled && title.length === 0
									? styles.card__button__disabled
									: styles.card__button__enabled
							}
							disabled={title.length === 0 ? true : false}
							onPress={this.handleAddDeck}
						>
							<Text style={styles.card__button_text}>{ADD_DECK_CREATE_BTN}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
const mapStateToProps = (params) => {
	return params;
};

export default connect(mapStateToProps)(AddDeck);