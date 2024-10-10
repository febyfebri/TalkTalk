import { Stack } from "expo-router"
import { View } from "react-native"
import { defaultStyles } from "../../../styles"

const StatusScreenLayout = () => {
    return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen 
                name="index"
                options={{
                    headerTitle:'Status'
                }}
            />
        </Stack>
    </View>
    )
}

export default StatusScreenLayout