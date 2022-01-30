import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import Card from "../components/Card";
import details from '../assets/workouts/index.json';

export default function Workouts({ navigation }) {
    let cards = [];
    for (let i = 0; i < 4; i++) {cards.push(<Card num={i} key={i} navigation={navigation} details={details[i]} />) }
    return (
        <View>
            <StatusBar style="transparent" />
            <Header />
            <ScrollView style={styles.container}>
                {cards}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
    }
})
