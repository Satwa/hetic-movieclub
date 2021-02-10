import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { COLORS, BLUR } from '../constants'

export default Overlay = props => {
	return (
		<TouchableOpacity
			style={styles.fullScreen}
			onPress={props.onPress}
			activeOpacity={1}
		>
			{ props.children }
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	fullScreen: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 99999,
		backgroundColor: 'rgba(0, 0, 0, .3)'
	}
})