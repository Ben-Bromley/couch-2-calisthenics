import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import Nav from "../components/Nav";
import WeekItem from "../components/WeekItem";
export default function Homepage({navigation}) {
    let items = [];
    for (let i = 0; i < 4; i++) {
        items.push(<WeekItem num={i} key={i} navigation={navigation} />)
    }
    return (
        <View>
            <StatusBar style="transparent" />
            <Header />
            <ScrollView style={{ flex: 1, minHeight: 600 }}>
                {items}
            </ScrollView>
            <Nav />
        </View>
    )
}

const styles = StyleSheet.create({

})
