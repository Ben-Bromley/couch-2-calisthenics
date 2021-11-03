import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const backgroundImage = { uri: "https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" };
const { width, height } = Dimensions.get('window');
export default function App() {
  return (
    <View>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
          <View style={{flex: 1, alignItems: "center"}}>
            <Text style={{ color: '#fff', fontSize: "4rem", fontWeight: 600 }}>C2C</Text>
            <Text style={{ color: '#fff', fontSize: "2rem", fontWeight: 200 }}>Couch-2-Calisthenics</Text>
          </View>
          <StatusBar style="auto" />
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={{ backgroundColor: '#27e', padding: '15px', margin: '10px', borderRadius: "3px", }}>
            <Text style={{ fontSize: 25, color: '#fff' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  container: {
    backgroundColor: "#0008",
    padding: "30px",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: "4px",
    // borderColor: "pink",
  },

});
