import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

export default function WorkoutDetails(props) {
    return (
        <View>
            <ImageBackground style={styles.bg} source={{ uri: props.route.params.image }}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>{props.route.params.workout}</Text>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <Text>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis ipsum, vestibulum eget tortor aliquet, sollicitudin placerat ipsum. Mauris eu felis pellentesque, ornare nisl ac, maximus leo. \n \nAliquam euismod enim sit amet libero tincidunt condimentum. Praesent fermentum tincidunt neque, nec pharetra turpis aliquam nec. Quisque volutpat mauris porta lobortis venenatis. Integer in purus nibh. Morbi malesuada enim lorem, ut dictum sem egestas vitae. \n \nCurabitur condimentum rutrum mi id gravida. Maecenas sed tincidunt leo, quis iaculis metus. Duis molestie, odio ac luctus commodo, ipsum diam eleifend urna, in volutpat ante dolor vel justo. Morbi congue arcu risus, id placerat est semper sit amet. Suspendisse consectetur nisl a euismod fringilla. Phasellus ultricies facilisis egestas. \n \nDonec enim sapien, tincidunt vel commodo et, interdum a mauris. Suspendisse massa ligula, sodales non egestas sed, malesuada vitae metus. Aliquam tortor massa, lacinia sed justo vitae, sodales tempus sapien.'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: { height: 200, overflow: "hidden" },
    overlay: { backgroundColor: "#0008", height: 200, padding: 20, },
    title: { color: "#fff", marginTop: "auto", fontSize: 30 },
    container: {
        padding: 20,
    }
})