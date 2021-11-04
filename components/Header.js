import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import Constants from 'expo-constants';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>C2C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "600",
    },
    header: {
        backgroundColor: "#27a",
        height: Constants.statusBarHeight + 70,
        paddingTop: Constants.statusBarHeight,
        // flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
