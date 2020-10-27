import { StyleSheet } from 'react-native';
import { cadetBlue, white, buttercup, gray, blue } from './colors';
import { COMMON_FONT_FAMILY } from './constants';
export const styles = StyleSheet.create({
	//common layout
	container__main: {
		flex: 1,
		alignSelf: 'stretch',
		padding: 5,
		paddingBottom: 15,
		color: cadetBlue,
	},
	card__main: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: cadetBlue,
		margin: 8,
		height: 250,
		borderRadius: 10,
	},
	card__text: {
		fontSize: 30,
		color: white,
		textAlign: 'center',

		flexWrap: 'wrap',
		alignItems: 'flex-start',
	},
	card__paragraph: {
		color: white,
		textAlign: 'center',
		padding: 10,
	},
	card__button: {
		marginBottom: 10,
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: white,
		minHeight: 50,
		minWidth: 150,
		borderStyle: 'solid',
		borderRadius: 10,
	},
	card__button_text: {
		color: cadetBlue,
		textAlign: 'center',
		padding: 10,
		fontWeight: 'bold',
	},
	//add new specific layout
	card__button__enabled: {
		margin: 10,
		justifyContent: 'center',
		textAlign: 'center',
		borderStyle: 'solid',
		borderRadius: 10,
		backgroundColor: white,
	},
	card__button__disabled: {
		backgroundColor: gray,
		margin: 10,
		justifyContent: 'center',
		textAlign: 'center',
		borderStyle: 'solid',
		borderRadius: 10,
	},
	card__text__container: {
		textAlign: 'center',
		marginBottom: 175,
	},
	//add deck and add card
	card__text__input__container: {
		position: 'absolute',
	},
	//add deck and add card
	card__text__input: {
		textAlign: 'center',
		borderStyle: 'solid',
		borderRadius: 8,
		padding: 10,
		margin: 15,
		color: white,
	},
	//Add card specific layout

	card__checkbox: {
		flex: 1,
		justifyContent: 'center',
	},
	view__question_number: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-start',
	},
	view__question_title: {
		margin: 20,
		borderStyle: 'solid',
		borderRadius: 20,
	},
	view__text_input: {
		margin: 20,
		textAlign: 'center',
	},
});