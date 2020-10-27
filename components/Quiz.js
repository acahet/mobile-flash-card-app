import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';
import { white } from '../utils/colors';
import QuizResultsContainer from './QuizResults';
import {
	QUIZ_RESULT_CONGRATS,
	QUIZ_RESULT_LOST,
	SCREEN_NAME_DECK_VIEW,
	QUIZ_BACK_TO_DECK_BTN,
	QUIZ_VIEW_ANSWER,
	QUIZ_VIEW_QUESTION,
	QUIZ_ANSWER_CORRECT_BTN,
	QUIZ_ANSWER_INCORRECT_BTN,
	QUIZ_EMPTY_DECK,
	QUIZ_RESULT_DRAW,
	QUIZ_RESTART_QUIZ_BTN,
} from '../utils/constants';

class Quiz extends Component {
	state = {
		questionNumber: 0,
		showAnswer: false,
		rightAnswer: 0,
		wrongAnswer: 0,
		animation: new Animated.Value(1),
	};

	restartQuiz = () => {
		this.setState(() => ({
			questionNumber: 0,
			showAnswer: false,
			rightAnswer: 0,
			wrongAnswer: 0,
		}));
	};

	animate = () => {
		const { animation } = this.state;
		Animated.sequence([
			Animated.timing(animation, { duration: 200, toValue: 1.04, useNativeDriver: true }),
			Animated.spring(animation, { toValue: 1, friction: 4, useNativeDriver: true  }),
		]).start();
	};
	saveAnswer = (answer) => {
		this.animate();
		{
			/*  //on click - correct/incorrect */
		}
		const { questionNumber, rightAnswer, wrongAnswer } = this.state;
		const quizDeck = this.props.route.params.entryId;
		const decks = this.props.decks;
		const totalQuestions = decks[quizDeck].questions.length;
		const isAnswerSelectedCorrect = decks[quizDeck].questions[questionNumber].correctAnswer;
		{
			/* // check if answer selected was correct + go to next question in  the deck */
		}
		answer === (isAnswerSelectedCorrect && totalQuestions > questionNumber)
			? this.setState({ rightAnswer: rightAnswer + 1 })
			: this.setState({ wrongAnswer: wrongAnswer + 1 });
		this.setState({ questionNumber: questionNumber + 1, showAnswer: false });
	};
	render() {
		const { questionNumber, showAnswer, rightAnswer, wrongAnswer, animation } = this.state;
		const decks = this.props.decks;
		const quizDeck = this.props.route.params.entryId;
		const qNumber = this.state.questionNumber + 1;
		const hasQuestion = decks[quizDeck].questions;
		const totalQuestions = hasQuestion.length;
		if (questionNumber === 0 && totalQuestions === 0) {
			return (
				<QuizResultsContainer
					text={QUIZ_EMPTY_DECK}
					animation={animation}
					onPress={() =>
						this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, {
							entryId: quizDeck,
						})
					}
					title={QUIZ_BACK_TO_DECK_BTN}
				/>
			);
		}
		if (totalQuestions === questionNumber && rightAnswer > wrongAnswer) {
			return (
				<QuizResultsContainer
					animation={animation}
					text={QUIZ_RESULT_CONGRATS}
					onPress={() => this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, { entryId: quizDeck })}
					title={QUIZ_BACK_TO_DECK_BTN}
				>
					<TouchableOpacity style={styles.card__button} onPress={this.restartQuiz}>
						<View style={styles.card__button_text}>
							<Text style={styles.card__button_text}>{QUIZ_RESTART_QUIZ_BTN}</Text>
						</View>
					</TouchableOpacity>
				</QuizResultsContainer>
			);
		}

		if (totalQuestions === questionNumber && rightAnswer < wrongAnswer) {
			return (
				<QuizResultsContainer
					animation={animation}
					text={QUIZ_RESULT_LOST}
					onPress={() =>
						this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, {
							entryId: quizDeck,
						})
					}
					title={QUIZ_BACK_TO_DECK_BTN}
				>
					<TouchableOpacity style={styles.card__button} onPress={this.restartQuiz}>
						<View style={styles.card__button_text}>
							<Text style={styles.card__button_text}>{QUIZ_RESTART_QUIZ_BTN}</Text>
						</View>
					</TouchableOpacity>
				</QuizResultsContainer>
			);
		}

		if (totalQuestions === questionNumber && rightAnswer === wrongAnswer) {
			return (
				<QuizResultsContainer
					animation={animation}
					text={QUIZ_RESULT_DRAW}
					onPress={() =>
						this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, {
							entryId: quizDeck,
						})
					}
					title={QUIZ_BACK_TO_DECK_BTN}
				>
					<TouchableOpacity style={styles.card__button} onPress={this.restartQuiz}>
						<View style={styles.card__button_text}>
							<Text style={styles.card__button_text}>{QUIZ_RESTART_QUIZ_BTN}</Text>
						</View>
					</TouchableOpacity>
				</QuizResultsContainer>
			);
		}

		return (
			<View style={styles.container__main}>
				<View style={styles.card__main}>
					<Text style={styles.card__text}>
						{qNumber} / {hasQuestion.length}
						{/* card__text */}
					</Text>
					<Animated.Text style={[styles.card__text, { transform: [{ scale: animation }] }]}>
						{!showAnswer
							? decks[quizDeck].questions[questionNumber].question
							: decks[quizDeck].questions[questionNumber].answer}
					</Animated.Text>
					<TouchableOpacity
						style={styles.card__text}
						onPress={() => this.setState({ showAnswer: !showAnswer })}
					>
						<Animated.Text
							style={
								([styles.card__button_text, { transform: [{ scale: animation }] }],
								{
									color: white,
									padding: 20,
									fontSize: 20,
								})
							}
						>
							{!showAnswer ? QUIZ_VIEW_ANSWER : QUIZ_VIEW_QUESTION}
						</Animated.Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.card__button} onPress={() => this.saveAnswer(true)}>
						<Text style={styles.card__button_text}>{QUIZ_ANSWER_CORRECT_BTN}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.card__button} onPress={() => this.saveAnswer(false)}>
						<Text style={styles.card__button_text}>{QUIZ_ANSWER_INCORRECT_BTN}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const mapStateToProps = (decks) => {
	return { decks };
};

export default connect(mapStateToProps)(Quiz);