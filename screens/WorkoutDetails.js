import { ScrollView, View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

export default function WorkoutDetails(props) {
    // let [workout, image, body] = props.route.params;
    let title = props.route.params.title;
    let image = props.route.params.image;
    let body = props.route.params.body;

    return (
        <View>
            <ImageBackground style={styles.bg} source={{ uri: image }}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
            <ScrollView style={styles.container}>
                <Text>{body}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: { height: 200, overflow: "hidden" },
    overlay: { backgroundColor: "#0008", height: 200, padding: 20, },
    title: { color: "#fff", marginTop: "auto", fontSize: 30 },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 180,
        marginBottom: 200,
    }
})