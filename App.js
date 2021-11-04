import React from 'react';
import SignedOut from './screens/SignedOut';
import SignUp from './screens/SignUp';
import Homepage from './screens/Homepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignedOut" component={SignedOut} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{title: "Sign Up"}}/>
        <Stack.Screen name="Homepage" component={Homepage} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
