import React, { useState, useEffect, useMemo } from 'react'
import { Text, View, ScrollView, SafeAreaView, Image, StyleSheet, Button, Linkedin, Animated } from 'react-native'
import GenreItem from '../components/GenreItem'
import InfiniteList from '../components/InfiniteList'
import { COLORS, GENERIC_STYLE } from '../constants'
import { getGenre } from '../services/endpoints'

export default HomeScreen = props => {
	const [genre, setGenre] = useState([])

	useMemo(async () => {
		getGenre().then(data => setGenre(data.genres))
	}, [])

	return (
		<SafeAreaView style={styles.page}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Image
					source={ require('../../assets/logo.jpg') }
					style={styles.logo}
				/>
				<InfiniteList
					numColumns={2}
					payload={genre}
					cardItem={GenreItem}
					style={styles.list}
					navigation={props.navigation}
					goToScreen={ (item) => {
						props.navigation.navigate('Genre', { title: item.name, id: item.id }) 
					}}
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
		borderColor: COLORS.red,
		alignSelf: 'center'
	},
	scrollView: {
		flexGrow: 1
	},
	list: {
		flex: 1,
		marginTop: 25
	}
})
