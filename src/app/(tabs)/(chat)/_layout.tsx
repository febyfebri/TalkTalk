import { View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { defaultStyles } from '../../../styles'

const ChatScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen 
            name='index'
            options={{
                headerTitle:'Chat'
            }}
        />
      </Stack>
    </View>
  )
}

export default ChatScreenLayout