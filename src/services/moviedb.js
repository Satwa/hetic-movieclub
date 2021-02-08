import * as Localization from 'expo-localization'
import { MOVIEDB_API_KEY, MOVIEDB_API_BASE } from "../constants"

const getQueryString = (queryParams) => {
	// const obj = {param1: "value1", param2: 12}
	let queryString
	if(typeof queryParams === 'object') {
		//?param1=value1&param2=12 etc...
		queryString = Object.entries(queryParams)
			.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
			.join('&')
	}

	if(queryString) return `?${queryString}`

	return ''
}

const getUrl = (path, queryParams) => `${path}${getQueryString(queryParams)}`

export default getMovieDbUrl = (path, queryParams = {}) => {
	return getUrl(
		`${MOVIEDB_API_BASE}${path}`,
		{
			...queryParams,
			api_key: MOVIEDB_API_KEY,
			language: Localization.locale,
		}
	)
}
