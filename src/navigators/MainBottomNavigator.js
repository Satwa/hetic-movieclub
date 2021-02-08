import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../components/HomeScreen'
import SearchScreen from '../components/SearchScreen'

const TabNavigator = createBottomTabNavigator()

export default MainBottomNavigator = () => (
	<TabNavigator.Navigator>
		<TabNavigator.Screen name='Home' component={HomeScreen} />
		<TabNavigator.Screen name='Search' component={SearchScreen} />
	</TabNavigator.Navigator>
)