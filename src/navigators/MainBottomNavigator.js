import React from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import { COLORS } from '../constants'

const TabNavigator = createBottomTabNavigator()

export default MainBottomNavigator = () => (
	<TabNavigator.Navigator
		tabBarOptions={{
			showLabel: false,
			activeTintColor: COLORS.green,
			inactiveTintColor: COLORS.light,
			style: {
				backgroundColor: COLORS.red
			},
			// activeBackgroundColor: 'yellow',
			activeTabStyle: {
				backgroundColor: 'blue'
			}
		}}
	>
		<TabNavigator.Screen
			name='Home'
			component={HomeScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<Entypo name="home" size={ size } color={ color } />
				)
			}}
		/>
		<TabNavigator.Screen
			name='Search'
			component={SearchScreen}
			options={{
				tabBarIcon: ({ color, size }) => (
					<FontAwesome name="search" size={ size } color={ color } />
				)
			}}
		/>
	</TabNavigator.Navigator>
)