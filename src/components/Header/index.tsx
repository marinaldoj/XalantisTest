import React from "react";
import { View,StyleSheet, Text } from "react-native";

export default function Header(){
    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.textWelcome}>Welcome,</Text>
                <Text style={styles.title}>Marinaldo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 100,
    },
    container:{
        width: "78%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 100,
        flex: 1,
        justifyContent: "center",
        paddingLeft: 20,
        paddingTop: 10

    },
    textWelcome:{
        fontSize: 14,
        fontWeight: "500",
        color:"#979797",
        marginBottom: -4
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        color:"#272829"
    },

})