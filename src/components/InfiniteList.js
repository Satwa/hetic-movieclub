import React, { useState, useEffect, useMemo } from 'react'
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

// props: loadMore, totalPage, initialLoad????, cardItem
export default InfiniteList = props => {
	const [isLoading, setLoading] = useState(false)
	const [data, setData] = useState(props.payload || [])
	let page = 0

	useEffect(() => {
		setData(props.payload)
	}, [props.payload])

	// TODO: show loader
	return (
		<FlatList
			{...props}
			data={data}
			renderItem={({ item, index }) => (
				<>
					<props.cardItem 
						data={item}
						key={index}
						showDetails={ props.goToScreen } 
					/>
				</>
			)}
			onEndReachedThreshold={0.5}
			onEndReached={() => {
				if(props.loadMore && page < props.totalPage){
					setLoading(true)
					props.loadMore()
						.then((newPageData) => {
							setData([...data, ...newPageData])
							setLoading(false)
						})
				}
			}}
		/>
	)
}
