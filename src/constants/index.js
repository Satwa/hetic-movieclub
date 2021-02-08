import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export const MOVIEDB_API_BASE = 'https://api.themoviedb.org/3'
export const MOVIEDB_API_KEY = '62f071d2521aba16cf7952ef57fd6e77'

export const COLORS = {
	red: '#B00020',
	green: '#B5A90F',
	dark: '#0000000',
	light: '#FFFFFF',
	background: '#F4F4F4'
}

export const BLUR = {
    shadowColor: COLORS.red,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3
}

export const GENERIC_STYLE = {
	page: {
		// flex: 1,
		backgroundColor: COLORS.background
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
}

export const HEADER_OPTIONS = ({ navigation, route}) => ({
	title: route.params.title,
	headerStyle: {
		backgroundColor: COLORS.red,
		borderRadius: 24,
		height: 150
	},
	headerLeft: () => (
		<TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 12 }}>
			<FontAwesome name="arrow-left" size={24} color={COLORS.green} />
		</TouchableOpacity>
	),
	headerTintColor: COLORS.green,
	headerTitleStyle: {
		fontWeight: 'bold',
		color: COLORS.green,
		textTransform: 'uppercase',
		fontSize: 24,
	},
})

export const MOVIEDETAILS_HEADER_OPTIONS = ({ navigation, route }) => ({
	headerStyle: {
		backgroundColor: 'transparent',
	},
	headerShown: true,
	headerTransparent: true,
	headerLeft: () => (
		<TouchableOpacity onPress={navigation.goBack} style={{ marginLeft: 12 }}>
			<FontAwesome name="arrow-left" size={24} color={COLORS.red} />
		</TouchableOpacity>
	),
	title: ''
})
