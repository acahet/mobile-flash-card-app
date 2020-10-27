import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COMMON_FONT_FAMILY } from '../../utils/constants';

import DeckList from '../DeckList';
import AddCard from '../AddCard';
import Quiz from '../Quiz';
import DeckView from '../DeckView';
import AddDeck from '../AddDeck';

import {
	SCREEN_NAME_HOME,
	SCREEN_NAME_DECK_VIEW,
	SCREEN_NAME_ADD_CARD,
	SCREEN_NAME_QUIZ,
	SCREEN_NAME_ADD_DECK,
} from '../../utils/constants';
import { blue, white } from '../../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNav = () => (
	<Stack.Navigator headerMode="screen">
		<Stack.Screen name={SCREEN_NAME_HOME} component={Tabs} options={{ headerShown: false }} />

		<Stack.Screen
			name={SCREEN_NAME_DECK_VIEW}
			component={DeckView}
			options={{
				headerTintColor: white,
				headerStyle: {
					backgroundColor: blue,
				},
			}}
		/>
		<Stack.Screen
			name={SCREEN_NAME_ADD_CARD}
			component={AddCard}
			options={{
				headerTintColor: white,
				headerStyle: {
					backgroundColor: blue,
				},
			}}
		/>
		<Stack.Screen
			name={SCREEN_NAME_QUIZ}
			component={Quiz}
			options={{
				headerTintColor: white,
				headerStyle: {
					backgroundColor: blue,
				},
			}}
		/>
	</Stack.Navigator>
);

const Tabs = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
				let iconName;

				if (route.name === SCREEN_NAME_HOME) {
					iconName = focused ? 'cards' : 'cards-outline';
				} else if (route.name === SCREEN_NAME_ADD_DECK) {
					iconName = focused ? 'card' : 'card-outline';
				}
				// You can return any component that you like here!
				return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
			},
		})}
		tabBarOptions={{
			activeTintColor: white,
			inactiveTintColor: white,
			style: { backgroundColor: blue },
		}}
	>
		<Tab.Screen name={SCREEN_NAME_HOME} component={DeckList} />
		<Tab.Screen name={SCREEN_NAME_ADD_DECK} component={AddDeck} />
	</Tab.Navigator>
);

export default MainNav;