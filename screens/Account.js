import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header';

export default function Account({ route }) {
    return (
        <View>
            <Header />
            <View>
                <Text style={{color: "black", backgroundColor: "orange"}}>{route.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
