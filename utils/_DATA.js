import AsyncStorage from '@react-native-community/async-storage';
const STORAGE_DECKS_KEY = 'Flashcards: decks';

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
		return AsyncStorage.getItem(STORAGE_DECKS_KEY).then((results) => {
			if (results === null) {
				AsyncStorage.setItem(JSON.stringify(decks));
				return decks;
			} else {
				return JSON.parse(results);
			}
		});
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
function formatQuestion({ question, answer, correctAnswer }) {
	return {
		question: question,
		answer: answer,
		correctAnswer: correctAnswer,
	};
}

export const _getDeckTitle = async (deck) => {
	try {
		AsyncStorage.getItem(STORAGE_DECKS_KEY).then((results) => {
			console.log('deck title is: ', JSON.parse(results)[deck].title);
			return JSON.parse(results)[deck].title;
		});
	} catch (error) {
		console.log('_getDeckTitle error ', error);
	}
};

// add card
export const _addCardToDeck = async (title, card) => {
	const formattedQuestion = formatQuestion(card);

	try {
		const deck = await _getDeckTitle(title);

		await AsyncStorage.mergeItem(
			STORAGE_DECKS_KEY,
			JSON.stringify({
				[title]: {
					questions: [...deck.questions].concat(formattedQuestion),
				},
			})
		);
	} catch (error) {
		console.log('_getDeckTitle error ', error);
	}
};