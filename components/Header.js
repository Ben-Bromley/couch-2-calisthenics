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
    title: {color: "#fff",fontSize: 35,fontWeight: "800",},
    header: {
        backgroundColor: "#27a",
        height: Constants.statusBarHeight + 50,
        paddingTop: Constants.statusBarHeight - 10,
        justifyContent: "center",
        alignItems: "center"
    },
})
