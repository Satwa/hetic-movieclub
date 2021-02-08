import React, { useState, useEffect, useMemo } from 'react'
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

// props: loadMore, totalPages, payload, cardItem
export default InfiniteList = props => {
	// TODO: add loader
	return (
		<>
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
					console.log('onEndReached')
					if(props.page < props.totalPages){
						props.loadMore()
					}
				}}
			/>
			{
				!props.payload && props.noResult
			}
		</>
	)
}
