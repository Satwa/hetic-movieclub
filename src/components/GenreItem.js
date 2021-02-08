import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { COLORS, BLUR } from '../constants'

export default GenreItem = props => {
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={props.showDetails}
		>
			<Text style={styles.text}>{props.data.name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		...BLUR,
		backgroundColor: COLORS.light,
		flex: 1,
		margin: 15,
		paddingTop: 20,
		paddingBottom: 20,
		alignItems: 'center'
	},
	text: {
		color: COLORS.red,
		fontWeight: 'bold',
		fontSize: 18
	}
})