export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';

import { getInitialData, addDeck, addCardToDeck } from '../utils/api';
import { _addCardToDeck } from '../utils/_DATA';

//get decks
function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	};
}

//add deck
export function addNewDeck(deck, card) {
	return {
		type: ADD_DECK,
		deck,
		card,
	};
}

//add card with question to deck
export function addQuestionToDeck(deck, card) {
	return {
		type: ADD_QUESTION_TO_DECK,
		deck,
		card,
	};
}
//handle the inital data received from data
export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then((decks) => {
			dispatch(receiveDecks(decks));
		});
	};
}

export function handleAddDeck(title) {
	return (dispatch) => {
		return addDeck(title).then((res) => {
			dispatch(addDeck(res));
		});
	};
}
export function handleAddCard(deck, { question, answer, correctAnswer }) {
	return (dispatch) => {
		return addCardToDeck(deck, { question, answer, correctAnswer }).then((res) => {
			console.log('handleAddCard ', handleAddCard);
			dispatch(addQuestionToDeck(deck, { question, answer, correctAnswer }));
		});
	};
}