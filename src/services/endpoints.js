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

export const getGenre = async () => {
	const req = await fetch( formatUrl('/genre/movie/list'))
	return await req.json()
}

// get movie
// get genre list
// get genre movies