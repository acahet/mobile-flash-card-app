import { _getData, _getDeckTitle, _addNewDeckByTitle, _addCardToDeck } from './_DATA';

export const getInitialData = () => {
	return _getData();
};

export const getDeck = (deckID) => {
	return _getDeckTitle(deckID);
};

export const addDeck = (deck) => {
	return _addNewDeckByTitle(deck);
};

export const addCardToDeck = (deck, info) => {
	return _addCardToDeck(deck, info);
};