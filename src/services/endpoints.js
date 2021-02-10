import formatUrl from './moviedb'

export const searchMovie = async (text, page) => {
	const req = await fetch(
		formatUrl('/search/movie', {
			query: text,
			page
		})
	)

	return await req.json()
}

export const getMovie = async (id) => {
	const req = await fetch(
		formatUrl(`/movie/${id}`, {
			append_to_response: 'videos',
		})
	)

	return await req.json()
}

export const getGenre = async () => {
	const req = await fetch( formatUrl('/genre/movie/list'))
	return await req.json()
}


export const getMoviesByGenre = async (id, page = 1) => {
	const req = await fetch(
		formatUrl('/discover/movie', {
			with_genres: id,
			page
		})
	)

	return await req.json()
}