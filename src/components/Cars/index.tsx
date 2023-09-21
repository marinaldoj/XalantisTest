import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface IPoke{
    name: string
}

// Application Car component 

export default function Cars({name}:IPoke){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{
                name[0].toUpperCase() + name.substring(1)
            }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        marginBottom: 10,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 20,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    text:{
        fontSize: 20,
        fontWeight: "500",
        color: "#272829"
    },
    imageStyle:{
        width: 100,
        height: 100,
        borderRadius: 100
    }
})