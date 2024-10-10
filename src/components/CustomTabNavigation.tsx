import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../constants/token';
import MaterialIcon from "@expo/vector-icons/MaterialIcons"
import MaterialCommunity from "@expo/vector-icons/MaterialCommunityIcons"

interface tabBarProps {
    state:any,
    descriptors:any[number],
    navigation:any
}

interface IconProps {
    label:String,
    active:Boolean
}

const Icon = ({label,active}:IconProps)=> {
    switch (label) {
        case "Chat":
            return (
                <View>
                    <MaterialCommunity name="chat" color={active ? 'white' :'black'} size={24} />
                </View>
            );
        case "Status":
            return (
                <View>
                    <MaterialCommunity name="camera-plus" color={active ? 'white' :'black'} size={24} />
                </View>
            );
            case "Settings":
                return (
                    <View>
                        <MaterialIcon name="settings" color={active ? 'white' :'black'} size={24} />
                    </View>
                );    
        default:
            break;
    }
}

const CustomTabNavigation = ({ state, descriptors, navigation }:tabBarProps) => {
  return (
<View style={styles.container}>
      {state.routes.map((route :any, index:number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.menu}
          >
                <Icon label={label} active={isFocused} />
                {isFocused ? (
                    <Text style={{
                        color:'white',
                        fontSize:14,
                        fontWeight:'600'
                    }}>
                        {label}
                    </Text>
                ) : (
                    <Text style={{
                        color:'black',
                        fontSize:14,
                        fontWeight:'400'
                    }}>
                        {label}
                    </Text>
                )}
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default CustomTabNavigation


const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.text,
        justifyContent: "space-between",
        paddingHorizontal: 60,
        paddingVertical: 18,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      menu: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
      }
})