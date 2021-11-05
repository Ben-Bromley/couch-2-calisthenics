import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header';
import Nav from '../components/Nav';
export default function Details({ route }) {
    return (
        <View>
            <Header />
            <View>
                <Text style={{color: "black", backgroundColor: "orange"}}>{route.params.name}</Text>
            </View>
            <Nav />
        </View>
    )
}

const styles = StyleSheet.create({})
