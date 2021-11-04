import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import HomeIcon from "../assets/home"
export default function Nav() {
    return (
        <View style={styles.nav}>
            <HomeIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#27a",
        height: 80,
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
