import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, SafeAreaView, Image, StyleSheet, Button, Linkedin, Animated } from 'react-native'
import { COLORS, GENERIC_STYLE } from '../constants'

export default HomeScreen = props => {
	return (
		<SafeAreaView style={[styles.page, styles.center]}>
			<ScrollView>
				<Image
					source={ require('../../assets/logo.jpg') }
					style={styles.logo}
				/> 
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	...GENERIC_STYLE,
	logo: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
		borderRadius: 500,
		borderWidth: 10,
		borderColor: COLORS.red
	}
})
