import React, { useState, useEffect } from 'react'
import { Text, ScrollView, View, Image, StyleSheet, Button, Animated } from 'react-native'
import { COLORS } from '../constants'

export default MovieDetailsScreen = props => {
	const movie = props.route.params.item

	return (
		<ScrollView style={styles.noHeader}>
			<Image
				source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
				style={styles.backgroundImage}
			/>
			<View style={styles.genericInfoContainer}>
				<View style={styles.coverContainer}>
					<Image
						source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
						style={styles.cover}
					/>
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.movieTitle}>{movie.title}</Text>
					<Text style={styles.greenText}>{movie.release_date}</Text>
				</View>

				<View style={styles.playerContainer}>
					<Text>PLAY</Text>
				</View>
			</View>

			<View style={styles.synopsisContainer}>
				<Text style={[styles.movieTitle, { marginBottom: 50 }]}>Synopsis</Text>
				<Text style={styles.greenText}>
					{ movie.overview }
				</Text>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	noHeader: {
		marginTop: -80,
		flexGrow: 1,
		zIndex: 999,
		position: 'relative'
	},
	backgroundImage: {
		flex: 1,
		height: 500,
	},

	genericInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		transform: [{ translateY: '-75%' }]
	},

	coverContainer: {
		// flex: 1,
		padding: 10,
		margin: 8,
		borderRadius: 20,
		backgroundColor: COLORS.light
	},
	cover: {
		// flex: 1,
		width: 80,
		height: 120,
		resizeMode: 'contain'
	},

	infoContainer: {
		flex: 2,
		padding: 10,
		margin: 8,
		borderRadius: 20,
		backgroundColor: COLORS.light
	},
	greenText: {
		color: COLORS.green,
	},
	movieTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLORS.green
	},

	playerContainer: {
		padding: 10,
		margin: 8,
		borderRadius: 20,
		backgroundColor: COLORS.light
	}
})
