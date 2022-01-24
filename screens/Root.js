import React from 'react'
import Workouts from './Workouts'
import WorkoutDetails from './WorkoutDetails';
import Account from './Account'
import HomeIcon from '../assets/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const WorkoutStack = createNativeStackNavigator();

export default function Root() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let color;
                if (route.name === 'Home') {
                    color = focused ? '#27a' : 'gray';
                    return <HomeIcon color={color} />
                } else if (route.name === 'other page') { }
                return null;
            },
            // tabBarLabel: route.name==='Home'?'':route.name,
            tabBarActiveTintColor: '#27a',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" options={{ headerShown: false }}>
                {() => <WorkoutStack.Navigator>
                    {/* initial screen for home tab */}
                    <WorkoutStack.Screen name="Workouts" component={Workouts} options={{ headerShown: false }} />
                    <WorkoutStack.Screen name="Workout Details" component={WorkoutDetails} options={({ route }) => ({ title: route.params.workout })} />
                </WorkoutStack.Navigator>}
            </Tab.Screen>
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

