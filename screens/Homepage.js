import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import Nav from "../components/Nav";
import WeekItem from "../components/WeekItem";
export default function Homepage() {
    return (
        <View>
            <StatusBar style="transparent" />
            <Header />
            <ScrollView style={{flex: 1, minHeight: 600}}>
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
                <WeekItem />
            </ScrollView>
            <Nav />
        </View>
    )
}

const styles = StyleSheet.create({
    
})
