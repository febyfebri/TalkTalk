import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { defaultStyles } from '../../../styles'

const SettingScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen 
            name='index' 
            options={{
                headerTitle:'Settings'
            }}
        />
      </Stack>
    </View>
  )
}

export default SettingScreenLayout