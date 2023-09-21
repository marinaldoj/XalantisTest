import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../Header";
import TabBar from "../TabBar";

interface IAuth{
    children: React.ReactNode
}

// Auth Layout is a component used for authenticated screens

export default function AuthLayout({children}:IAuth){
    return(
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.containerScroll}>
                {children}
            </ScrollView>
            <TabBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#61677A",
    },
    containerScroll: {
        padding: 20,
        marginBottom: 10,
        marginTop: 10,
    }
})