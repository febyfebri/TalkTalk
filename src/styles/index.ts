import { colors, fontSize } from "../constants/token";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.primary
    },
    text : {
        fontSize:fontSize.base,
        color:colors.text
    }
})

export const utilsStyles = StyleSheet.create({})