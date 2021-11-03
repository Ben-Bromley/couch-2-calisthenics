import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const backgroundImage = { uri: "https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" };
const { width, height } = Dimensions.get('window');
export default function App() {
  return (
    <View>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.background}>
        <View style={styles.container}>
          <StatusBar style="transparent" />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ color: '#fff', fontSize: 60, fontWeight: "600" }}>C2C</Text>
            <Text style={{ color: '#fff', fontSize: 25, fontWeight: "200" }}>Couch To Calisthenics</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => alert('TODO: create login screen')}
              style={{ backgroundColor: '#27e', borderRadius: 20, paddingHorizontal: 60, paddingVertical: 10 }}>
              <Text style={{ fontSize: 25, color: '#fff' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => alert('TODO: create sign up screen')}
              style={{ padding: 15, borderRadius: 20, alignItems: "center" }}>
              <Text style={{ fontSize: 25, color: "#fff" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height + Constants.statusBarHeight,
  },
  container: {
    backgroundColor: "#0008",
    paddingVertical: Constants.statusBarHeight + 10,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

});
