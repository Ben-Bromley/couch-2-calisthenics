import React from 'react'
import { StyleSheet } from 'react-native'
import Home from './Home'
import Details from './Details'

export default function Root() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
