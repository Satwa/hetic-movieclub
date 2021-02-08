import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { COLORS, GENERIC_STYLE, BLUR } from '../constants'

export default MovieItem = props => {
	return (
		<TouchableOpacity
			style={styles.card}
		>
			{ props.data.title }
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		...BLUR,
		backgroundColor: COLORS.light
	}
})