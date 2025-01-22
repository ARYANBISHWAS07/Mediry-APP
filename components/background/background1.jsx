import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Background = ({children}) => {
  return (
    <LinearGradient colors={["#4A90E2", "#50C9C3", "#1D3557"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{flex:1}} >
        {children}
    </LinearGradient>
  )
}

export default Background;