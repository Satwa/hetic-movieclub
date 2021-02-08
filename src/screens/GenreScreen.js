import React, { useState, useEffect, useMemo } from 'react'
import { COLORS, GENERIC_STYLE } from '../constants'
import { Text, SafeAreaView, ScrollView, Image, StyleSheet, Button, Linkedin, Animated } from 'react-native'
import { getMoviesByGenre } from '../services/endpoints'
import MovieItem from '../components/MovieItem'

export default GenreScreen = props => {
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1)

	useMemo(async () => {
		getMoviesByGenre(props.route.params.id).then(data => setMovies(data))
	}, [])

	const loadMore = async () => {
		const _movies = await getMoviesByGenre(props.route.params.id, page + 1)
		setPage(page + 1)
		return await setMovies({
			...movies,
			results: [
				...movies.results,
				..._movies.results
			]
		})
	}

	return (
		<SafeAreaView style={styles.page}>
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
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	...GENERIC_STYLE,
	page: {
		...GENERIC_STYLE.page,
		flex: 1,
	},
	list: {
		flex: 1,
	}
})
