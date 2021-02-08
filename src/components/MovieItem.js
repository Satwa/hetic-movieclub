import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { COLORS, GENERIC_STYLE, BLUR } from '../constants'

export default MovieItem = props => {
	return (
		<TouchableOpacity
			style={styles.card}
		>
			<View style={styles.posterContent}>
				<Image
					source={{ uri: `https://image.tmdb.org/t/p/original${props.data.poster_path}` }}
					style={styles.poster}
				/>
			</View>

			<View style={styles.mainContent}>
				<Text style={styles.movieTitle}>{props.data.title}</Text>
				<Text style={styles.greenText}>{props.data.release_date}</Text>
			</View>

			<View style={styles.ratingContent}>
				<Text style={styles.ratingText}>{props.data.vote_average}</Text>
			</View>

		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		...BLUR,
		backgroundColor: COLORS.light,
		flex: 1,
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		flexDirection: 'row',
		alignItems: 'center',
		color: COLORS.green
	},

	greenText: {
		color: COLORS.green
	},
	
	posterContent: {
		flex: 1,
	},
	poster: {
		// flex: 1,
		width: 80,
		height: 120,
		resizeMode: 'contain'
	},
	
	mainContent: {
		flex: 3,
		color: COLORS.green,
		paddingLeft: 16,
		paddingRight: 16,
	},
	movieTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLORS.green
	},

	ratingContent: {
		flex: 1,
		alignItems: 'center',
	},
	ratingText: {
		color: COLORS.red,
		fontWeight: 'bold',
		fontSize: 20
	}
})