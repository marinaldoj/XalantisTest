import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButton{
    name: string;
    handlePress: () => void
}

// Application button component

export default function Button({
    name,
    handlePress
}:IButton){
    return <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 60,
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    text: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: "500"
    }
})