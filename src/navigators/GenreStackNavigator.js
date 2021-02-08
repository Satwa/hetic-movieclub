import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import GenreScreen from '../screens/GenreScreen'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'
import { COLORS, HEADER_OPTIONS } from '../constants'
import { FontAwesome } from '@expo/vector-icons'

const Stack = createStackNavigator()

export default GenreStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name='Genre'
				component={GenreScreen}
				options={(navigation) => HEADER_OPTIONS(navigation)} />
			<Stack.Screen
				name='MovieDetails'
				component={MovieDetailsScreen}
				options={({ route }) => ({ title: route.params.title })}
			/>
		</Stack.Navigator>
	)
}
