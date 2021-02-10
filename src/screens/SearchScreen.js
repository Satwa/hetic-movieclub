import React, { useState, useEffect, useMemo } from 'react'
import { COLORS, GENERIC_STYLE } from '../constants'
import { Text, SafeAreaView, View, ScrollView, Button, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { searchMovie } from '../services/endpoints'
import MovieItem from '../components/MovieItem'
import { FontAwesome } from '@expo/vector-icons'
 
export default SearchScreen = props => {
	const [movies, setMovies] = useState({})
	const [page, setPage] = useState(0)
	const [isLoading, setIsLoading] = useState(false)
	const [searchValue, onChangeSearchValue] = React.useState('')

	const loadMore = async (isNewRequest = false) => {
		const _previousPage = page
		if(isLoading) return
		
		if(isNewRequest){
			setPage(0)
			setMovies({})
		}
		setIsLoading(true)

		setPage(page + 1)
		const _movies = await searchMovie(searchValue, page + 1)

		if(_previousPage === 0 || isNewRequest) {
			setIsLoading(false)
			return await setMovies(_movies)
		}
		setIsLoading(false)
		return await setMovies({
			...movies,
			results: [
				...movies.results,
				..._movies.results
			]
		})
	}

	return (
		<SafeAreaView style={[styles.page, styles.scrollView]}>
			<Image
				source={require('../../assets/logo.jpg')}
				style={styles.logo}
			/>

			<View style={styles.searchBox}>
				{/* c'est pas algolia mais tout comme :') */}
				<View style={styles.searchSection}>
					<FontAwesome style={styles.searchIcon} name="search" size={18} color={COLORS.red} />
					<TextInput
						style={styles.input}
						onChangeText={text => onChangeSearchValue(text)}
						value={searchValue}
						placeholder='five'
						autoCorrect={false}
						autoFocus
					/>
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.blank}></View>
					<TouchableOpacity
						onPress={() => loadMore(true)}
						activeOpacity={0.8}
						style={styles.button}
					>
						{
							isLoading ?
							<ActivityIndicator color={COLORS.red} /> :
							<Text style={styles.buttonText}>Rechercher</Text>
						}
					</TouchableOpacity>
				</View>
			</View>

			{
				movies.results && movies.results.length > 0 ? (
					<InfiniteList
						payload={movies.results}
						cardItem={MovieItem}
						style={styles.list}
						goToScreen={(item) => {
							props.navigation.navigate('MovieDetails', { title: item.title, id: item.id, item })
						}}
						page={page}
						totalPages={movies.total_pages}
						loadMore={loadMore}
					/>
				) : (
					<View>
						<Image
							source={require('../../assets/bad.png')}
							style={styles.bad}
						/>
						<Text style={styles.noResult}>
							Aucune recherche effectuée
						</Text>
					</View>
				)
			}
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

	searchBox: {
		backgroundColor: COLORS.red,
		borderRadius: 24,
		padding: 20,
		height: 140,
		marginTop: 25,
		marginLeft: 8,
		marginRight: 8,
	},
	searchSection: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.light,
	},
	searchIcon: {
		padding: 10,
	},
	input: {
		flex: 1,
		fontSize: 16,
		height: 40,
		backgroundColor: COLORS.light,
		color: '#424242',
	},

	buttonContainer: {
		marginTop: 10,
		flexDirection: 'row'
	},
	blank: {
		flex: 2
	},
	button: {
		color: COLORS.light,
		backgroundColor: COLORS.green,
		alignItems: 'center',
		padding: 10,
		flex: 1
	},
	buttonText: {
		color: COLORS.light,
		textTransform: 'uppercase'
	},

	bad: {
		width: 200,
		height: 200,
		marginTop: 25,
		resizeMode: 'contain',
		alignSelf: 'center'
	},
	noResult: {
		alignSelf: 'center',
		marginTop: 50,
		color: COLORS.green,
		fontWeight: 'bold',
		fontSize: 18
	},

	list: {
		flexGrow: 1,
	}
})
