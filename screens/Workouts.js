import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import Card from "../components/Card";
export default function Workouts({ navigation }) {
    let items = [];
    for (let i = 0; i < 4; i++) { items.push(<Card num={i} key={i} navigation={navigation} />) }
    return (
        <View>
            <StatusBar style="transparent" />
            <Header />
            <ScrollView style={styles.container}>{items}</ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
    }
})
