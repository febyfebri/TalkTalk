import { Tabs } from "expo-router"
import CustomTabNavigation from "../../components/CustomTabNavigation"


const TabsNavigaiton = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }} tabBar={(props)=> <CustomTabNavigation {...props} />}>
        <Tabs.Screen name="(chat)" options={{
            title:'Chat'
        }} />
        <Tabs.Screen name="(status)" options={{
            title:'Status'
        }} />
        <Tabs.Screen name="setting" options={{
            title:'Settings'
        }} />
    </Tabs>
  )
}

export default TabsNavigaiton