import React from 'react'
import { StyleSheet, Dimensions, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native'

const backgroundImage = { uri: "https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" };
const { width, height } = Dimensions.get('window');

export default function SignUp() {
    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
            <KeyboardAvoidingView style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>
                <View>
                    <TextInput style={styles.input} placeholder="Email"></TextInput>
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
                    <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry></TextInput>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ fontSize: 20, color: "#fff", textAlign: "center", }}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height,
    },
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 120,
        backgroundColor: "#0008",
    },
    title: {
        color: "#fff",
        textAlign: "center",
        marginBottom: 40,
        fontSize: 40
    },
    button: {
        backgroundColor: '#27e',
        borderRadius: 10,
        width: 300,
        paddingVertical: 15,
    },
    input: {
        backgroundColor: "#fffd",
        width: 300,
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 18,
        fontWeight: "500",
    },
})
