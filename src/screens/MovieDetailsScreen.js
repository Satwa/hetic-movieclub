import React, { useState, useEffect, useMemo } from 'react'
import { Text, ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import LoadingIndicator from '../components/LoadingIndicator'
import { COLORS, TRIGGER_ALERT } from '../constants'
import { getMovie } from '../services/endpoints'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Overlay from '../components/Overlay'

export default MovieDetailsScreen = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [movie, setMovie] = useState(props.route.params.item)
	const [showTrailerOverlay, toggleTrailerOverlay] = useState(false)
	let youtubeKey = null

	useMemo(async () => {
		getMovie(movie.id)
			.then(data => {
				setMovie(data)
				if(data.videos.results.length > 0) {
					// look for a trailer, else use whatever video
					const trailer = data.videos.results.filter($0 => $0.type === 'Trailer')
					youtubeKey = trailer.length > 0 ? trailer[0].key : data.videos.results[0].key
				}
				setIsLoading(false)
			})
			.catch(() => {
				TRIGGER_ALERT(props.navigation)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			{
				isLoading && <LoadingIndicator />
			}
			{
				showTrailerOverlay &&
				<Overlay onPress={() => toggleTrailerOverlay(false)}>{/*  */}
					<View style={{ flex: 1 }}>
						<View style={{flex:1}}></View>
						<WebView
							style={{
								width: Dimensions.get('window').width - 16,
								height: 100,
								flex: 1,
								flexGrow: 1,
								flexShrink: 0
							}}
							onStartShouldSetResponder={event => true}
							javaScriptEnabled={true}
							// it doesn't play BUT it kinda works, let's be friend? :)
							source={{ uri: `https://www.youtube.com/embed/${youtubeKey}?rel=0&autoplay=0&showinfo=0&controls=0` }}
						/>
						<View style={{ flex: 1 }}></View>
					</View>
				</Overlay>
			}
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

					{
						movie.videos && movie.videos.results.length > 0 &&
							<TouchableOpacity
								style={styles.playerButtonContainer}
								activeOpacity={0.8}
								onPress={() => toggleTrailerOverlay(true)}
							>
								<FontAwesome name="play" size={24} color={COLORS.green} />
							</TouchableOpacity>
					}
				</View>

				<View style={styles.synopsisContainer}>
					<Text style={[styles.movieTitle, { marginBottom: 50 }]}>Synopsis</Text>
					<Text style={styles.greenText}>
						{ movie.overview }
					</Text>
				</View>
			</ScrollView>
		</>
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
		color: COLORS.green
	},
	movieTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: COLORS.green
	},

	synopsisContainer: {
		padding: 8
	},	

	playerButtonContainer: {
		padding: 10,
		margin: 8,
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.red,
		borderWidth: 4,
		borderColor: COLORS.green
	}
})
