import React from "react";
import { View, StyleSheet, Text, DimensionValue } from "react-native";
import InputLabel from "../InputLabel";
import Button from "../Button";

interface IProps{
    children: React.ReactNode,
    height?: DimensionValue
}

// Auth Layout is a component used for unauthenticated screens

export default function UnAuthLayout({
    children,
    height = "70%"
}:IProps){
    const styles = getStyles(height)
    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    )
}

const getStyles = (height:DimensionValue) => StyleSheet.create({
    wrapper: {
        width:"100%",
        height: "100%",
        backgroundColor: "#61677A",
        justifyContent: "flex-end"
    },
    container: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: height,
        borderTopRightRadius: 120,
        padding: 30,
        justifyContent: "space-between"
    },
})