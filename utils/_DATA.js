import AsyncStorage from '@react-native-community/async-storage';
const STORAGE_DECKS_KEY = 'mobile-cards: decks';

const decks = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
				correctAnswer: false,
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
				correctAnswer: true,
			},
		],
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer:
					'The combination of a function and the lexical environment within which that function was declared.',
				correctAnswer: true,
			},
		],
	},
};
export const _getData = async () => {
	try {
		const data = await AsyncStorage.getItem(STORAGE_DECKS_KEY)
		if(data === null) {
			AsyncStorage.setItem(STORAGE_DECKS_KEY, JSON.stringify(decks))
		}
		return data === null ? decks : JSON.parse(data)
	} catch (error) {
		console.log('_getData error ', error);
	}
};

export const _addNewDeckByTitle = async (title) => {
	try {
		return AsyncStorage.mergeItem(
			STORAGE_DECKS_KEY,
			JSON.stringify({
				[title]: {
					title,
					questions: [],
				},
			})
		);
	} catch (error) {
		console.log('_addNewDeckByTitle error ', error);
	}
};
export const _getDeckTitle = async (deck) => {
	try {
		const data = await AsyncStorage.getItem(STORAGE_DECKS_KEY)
		return JSON.parse(data)[deck]

	} catch (error) {
		console.log('_getDeckTitle error ', error);
	}
};

// add card
export const _addCardToDeck = async (title, card) => {
	const deck = await _getDeckTitle(title);
	try {


		await AsyncStorage.mergeItem(
			STORAGE_DECKS_KEY,
			JSON.stringify({
				[deck]: {
					[questions]: [...deck.questions].concat(card),
				},
			})
		);
	} catch (error) {
		console.log('_addCardToDeck error ', error);
	}
};