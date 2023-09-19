import React, { useEffect, useState } from "react";
import { View,StyleSheet, DimensionValue,TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

interface IStyles{
    screen: number;
    tabPosition: DimensionValue;
}

export default function TabBar(){
    const [screenSelected, setScreenSelected] = useState<IStyles>({
        screen: 1,
        tabPosition: "42%"
    })

    const styles = getStyles(screenSelected);
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.tabs} onPress={() => {
                navigation.navigate("Pokemon" as never)
            }}>
                <MaterialCommunityIcons name="pokeball" size={40} color="#61677A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs} onPress={() => {
                navigation.navigate("Mercedes" as never)
            }}>
                <AntDesign name="car" size={34} color="#61677A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabs} onPress={() => {
                navigation.navigate("Profile" as never)
            }}>
                <FontAwesome5 name="user-alt" size={30} color="#61677A" />
            </TouchableOpacity>
        </View>
    )
}

const getStyles = (selected:IStyles) => StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
        position: "relative"
    },
    tabs:{
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    containerBar: {
        position: "absolute",
        left: "10%",
        bottom: "20%",
        width: "100%",
        height: 10,
    },
    tabPosition: {
        width: "15%",
        height: 10,
        borderRadius: 10,
        backgroundColor: "#272829",
        left: selected.tabPosition
    }
})