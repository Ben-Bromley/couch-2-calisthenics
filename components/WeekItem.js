import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const image = { uri: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" };

export default function WeekItem() {
    return (
        <View>
            <ImageBackground style={styles.bg} source={image}>
                <View style={styles.container}>
                    <Text style={styles.title}>Week 1</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        margin: 10,
        height: 200,
        borderRadius: 10,
        overflow: "hidden"
    },
    container: {
        backgroundColor: "#0008",
        height: 200,
        padding: 20,
    },
    title: {
        color: "#fff",
        marginTop: "auto",
        fontSize: 30
    },
})
