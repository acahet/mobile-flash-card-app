import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Platform, Switch } from 'react-native';
import { connect } from 'react-redux';
import { handleAddCard } from '../actions';
import { CommonActions } from '@react-navigation/native';
import { styles } from '../utils/styles';
import { white } from '../utils/colors';
import TextInputSection from './TextInput/index';
import { ADD_CARD_QUESTION_PLACEHOLDER_TEXT, ADD_CARD_ANSWER_PLACEHOLDER_TEXT } from '../utils/constants';

class AddCard extends Component {
	state = {
		question: '',
		answer: '',
		correctAnswer: false,
	};
	submitCard = (deck) => {
		const { question, answer, correctAnswer } = this.state;
		const card = {
			question,
			answer,
			correctAnswer,
		};
		this.props.dispatch(handleAddCard(deck, card));
		this.props.navigation.dispatch(CommonActions.goBack());

		this.setState(() => ({
			question: '',
			answer: '',
			correctAnswer: false,
		}));
	};

	render() {
		const { question, answer, correctAnswer } = this.state;
		const currentDeck = this.props.route.params.entryId;
		return (
			<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container__main}>
				<View style={styles.card__main}>
					<View style={{ paddingTop: 50 }}>
						<Text style={styles.card__text}>Add question to {currentDeck}</Text>
						<View>
							<TextInputSection
								onChangeText={(question) => this.setState({ question: question })}
								placeholder={ADD_CARD_QUESTION_PLACEHOLDER_TEXT}
								value={question}
							/>

							<Text style={styles.card__text}> The answer is... </Text>
						</View>
						<TextInputSection
							onChangeText={(answer) => this.setState({ answer: answer })}
							placeholder={ADD_CARD_ANSWER_PLACEHOLDER_TEXT}
							value={answer}
						/>

						<Text style={styles.card__paragraph}>Is the answer correct?</Text>
					</View>
					<View style={styles.card__checkbox}>
						<Switch
							style={{ marginTop: 5, marginRight: 5 }}
							trackColor={{ false: '#767577', true: white }}
							ios_backgroundColor="#3e3e3e"
							value={correctAnswer}
							onValueChange={() => this.setState({ correctAnswer: !correctAnswer })}
						/>

						<Text style={{ color: white, marginTop: 5 }}>The Answer is: {correctAnswer ? '👍' : '👎'}</Text>
					</View>
					<View>
						<View>
							<TouchableOpacity
								style={
									styles.card__button__enabled && (question.length === 0 || answer.length === 0)
										? styles.card__button__disabled
										: styles.card__button__enabled
								}
								disabled={question.length === 0 || answer.length === 0 ? true : false}
								onPress={() => this.submitCard(currentDeck)}
							>
								<Text style={styles.card__button_text}>Submit</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

export default connect()(AddCard);