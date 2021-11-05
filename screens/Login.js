import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, ImageBackground, KeyboardAvoidingView, TextInput } from 'react-native';

const backgroundImage = { uri: "https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" };
const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
    return (
        <View>
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
                <KeyboardAvoidingView style={styles.container}>
                    <StatusBar style="transparent" />
                    <View>
                        <Text style={styles.title}>Login</Text>
                        <TextInput style={styles.input} placeholder="Email"></TextInput>
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
                        <TouchableOpacity
                            onPress={() => console.log('logging in...')}
                            style={styles.button}>
                            <Text style={{ fontSize: 20, color: '#fff', textAlign: "center" }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('SignUp') }}
                            style={styles.outlineButton}
                        >
                            <Text style={{ fontSize: 20, color: "#fff" }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 15,}}>
                        <Text style={{ fontSize: 15, color: "#fff", textAlign: "center", textDecorationLine: "underline"}}
                            onPress={()=>{navigation.replace('Root')}}
                        >
                            Skip for now
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View></View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: width,
        height: height + Constants.statusBarHeight,
    },
    container: {
        backgroundColor: "#0008",
        paddingTop: 180,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
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
        marginBottom: 15,
    },
    outlineButton: {
        padding: 13,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
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
});