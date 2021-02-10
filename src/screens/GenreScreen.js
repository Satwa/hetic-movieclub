import React, { useState, useEffect, useMemo } from 'react'
import { COLORS, GENERIC_STYLE, TRIGGER_ALERT } from '../constants'
import { SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import { getMoviesByGenre } from '../services/endpoints'
import MovieItem from '../components/MovieItem'
import LoadingIndicator from '../components/LoadingIndicator'

export default GenreScreen = props => {
	const [isLoading, setIsLoading] = useState(true)
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1)

	

	useMemo(async () => {
		getMoviesByGenre(props.route.params.id)
			.then(data => {
				setMovies(data)
				setIsLoading(false)
			})
			.catch(() => {
				TRIGGER_ALERT(props.navigation)
				setIsLoading(false)
			})
	}, [])

	const loadMore = async () => {
		try {
			const _movies = await getMoviesByGenre(props.route.params.id, page + 1)
			setPage(page + 1)
			return await setMovies({
				...movies,
				results: [
					...movies.results,
					..._movies.results
				]
			})
		}catch(err) {
			TRIGGER_ALERT(props.navigation)
			setIsLoading(false)
		}
	}

	return (
		<SafeAreaView style={styles.page}>
			{
				isLoading && <LoadingIndicator />
			}
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
