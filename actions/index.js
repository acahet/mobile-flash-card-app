export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

import { getInitialData, addDeck } from '../utils/api';
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
export function addCardToDeck(deck, card) {
	return {
		type: ADD_CARD_TO_DECK,
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
		return _addCardToDeck(deck, { question, answer, correctAnswer }).then((res) => {
			dispatch(addCardToDeck(deck, { question, answer, correctAnswer }));
		});
	};
}