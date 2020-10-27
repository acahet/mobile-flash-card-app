import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import {
	SCREEN_NAME_QUIZ,
	SCREEN_NAME_ADD_CARD,
	DECKVIEW_ADD_CARD_BTN,
	DECKVIEW_START_QUIZ_BTN,
	COMMON_STRING_CARD,
	COMMON_STRING_CARDS,
} from '../utils/constants';
class DeckView extends React.Component {
	state = {
		animation: new Animated.Value(1),
	};
	animate = () => {
		this.setNotification
		const { animation } = this.state;
		Animated.sequence([
			Animated.timing(animation, { duration: 500, toValue: 1.04, useNativeDriver: true }),
			Animated.spring(animation, { toValue: 1, friction: 4, useNativeDriver: true }),
		]).start();
	};
	componentDidMount = () => {
		this.animate();
		
	};
	setNotification =() =>{
		useEffect(()=>{
			clearLocalNotification().then(setLocalNotification)
		},[])
	}
	render() {
		
		const deck = this.props.route.params.entryId;
		const { decks } = this.props;

		const questionLength = decks[deck].questions.length;

		return (
			<View style={styles.container__main}>
				<View style={styles.card__main}>
					<View style={styles.card__text__container}>
						<Animated.Text style={[styles.card__text, { transform: [{ scale: this.state.animation }] }]}>
							{' '}
							{deck}{' '}
						</Animated.Text>
						<Animated.Text
							style={[styles.card__paragraph, { transform: [{ scale: this.state.animation }] }]}
						>
							{questionLength <= 1
								? `${questionLength} ${COMMON_STRING_CARD}`
								: `${questionLength} ${COMMON_STRING_CARDS}`}{' '}
						</Animated.Text>
					</View>
					<View>
						<View>
							<TouchableOpacity
								style={styles.card__button}
								onPress={() => {
									this.props.navigation.navigate(SCREEN_NAME_ADD_CARD, { entryId: deck });
								}}
							>
								<Text style={styles.card__button_text}>{DECKVIEW_ADD_CARD_BTN}</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={styles.card__button}
							onPress={() => {
								this.props.navigation.navigate(SCREEN_NAME_QUIZ, { entryId: deck });
							}}
						>
							<Text style={styles.card__button_text}>{DECKVIEW_START_QUIZ_BTN}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}
const mapStateToProps = (decks, state) => {
	const propsTest = Object.keys(state).map((index) => {
		return state[index];
	});
	return { decks, propsTest, state };
};
export default connect(mapStateToProps)(DeckView);