import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { COLORS, BLUR } from '../constants'
import Overlay from './Overlay'

export default LoadingIndicator = props => {
	return (
		<Overlay>
			<View style={styles.activityIndicatorContainer}>
				<ActivityIndicator />
			</View>
		</Overlay>
	)
}

const styles = StyleSheet.create({
	activityIndicatorContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 150,
		height: 150,
		borderRadius: 8,
		backgroundColor: COLORS.light,
		shadowColor: COLORS.dark,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.4,
		shadowRadius: 10
	},
})