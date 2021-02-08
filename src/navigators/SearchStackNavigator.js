import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import { MOVIEDETAILS_HEADER_OPTIONS } from '../constants'
import MovieDetailsScreen from '../screens/MovieDetailsScreen'

const Stack = createStackNavigator()

export default SearchStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Search' component={SearchScreen} options={{ headerShown: false }} />
			<Stack.Screen
				name='MovieDetails'
				component={MovieDetailsScreen}
				options={(navigation) => MOVIEDETAILS_HEADER_OPTIONS(navigation)}
			/>
		</Stack.Navigator>
	)
}
