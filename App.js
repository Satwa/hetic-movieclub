import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainBottomNavigator from './src/navigators/MainBottomNavigator'

export default function App() {
  return (
	<NavigationContainer>
		<MainBottomNavigator /> 
	</NavigationContainer>
  )
}