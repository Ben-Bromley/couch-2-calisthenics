import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const images = [
    "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVzaCUyMHVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1598266663439-2056e6900339?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHN0YW5kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1624622189831-6266d2373a94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsaXN0aGVuaWNzfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1516208813382-cbaf53501037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5MDA3NzQ0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
];
const titles = ["Beginner", "Intermediate", "Advanced", "Expert"]
// const details = [""]
export default function WeekItem(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('Details', {name: "Example Title"})
                }}
            >
                <ImageBackground style={styles.bg} source={{ uri: images[props.num] }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{titles[props.num]}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        margin: 10,
        height: 200,
        borderRadius: 10,
        overflow: "hidden"
    },
    container: {
        backgroundColor: "#0008",
        height: 200,
        padding: 20,
    },
    title: {
        color: "#fff",
        marginTop: "auto",
        fontSize: 30
    },
})
