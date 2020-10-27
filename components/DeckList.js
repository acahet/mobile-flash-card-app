import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../utils/styles';
import {
	SCREEN_NAME_DECK_VIEW,
	COMMON_STRING_CARD,
	COMMON_STRING_CARDS,
	SCREEN_NAME_DECK_VIEW_DECK,
} from '../utils/constants';
class DeckList extends React.Component {
	render() {
		const { decks } = this.props;

		return (
			<ScrollView style={styles.container__main}>
				{Object.keys(decks).map((deck) => {
					const { title, questions } = decks[deck];
					return (
						<View key={deck} style={styles.card__main}>
							<View>
								<Text style={styles.card__text}>{title}</Text>
								<Text style={styles.card__paragraph}>
									{questions.length <= 1
										? `${questions.length} ${COMMON_STRING_CARD}`
										: `${questions.length} ${COMMON_STRING_CARDS}`}
								</Text>
							</View>

							<View>
								<TouchableOpacity
									style={styles.card__button}
									onPress={() =>
										this.props.navigation.navigate(SCREEN_NAME_DECK_VIEW, {
											entryId: deck,
										})
									}
								>
									<Text style={styles.card__button_text}>{SCREEN_NAME_DECK_VIEW_DECK}</Text>
								</TouchableOpacity>
							</View>
						</View>
					);
				})}
			</ScrollView>
		);
	}
}

function mapStateToProps(decks) {
	return {
		decks,
	};
}

export default connect(mapStateToProps)(DeckList);