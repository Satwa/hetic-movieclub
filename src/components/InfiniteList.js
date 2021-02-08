import React, { useState, useEffect, useMemo } from 'react'
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

// props: loadMore, totalPages, payload, cardItem
export default InfiniteList = props => {
	const [isLoading, setLoading] = useState(false)

	// TODO: show loader
	return (
		<FlatList
			{...props}
			data={props.payload}
			renderItem={({ item, index }) => (
				<>
					<props.cardItem 
						data={item}
						key={index}
						showDetails={ () => props.goToScreen(item) } 
					/>
				</>
			)}
			onEndReachedThreshold={0.5}
			onEndReached={() => {
				if(props.page < props.totalPages){
					setLoading(true)
					props.loadMore()
						.then((newPageData) => {
							setLoading(false)
						})
				}
			}}
		/>
	)
}
