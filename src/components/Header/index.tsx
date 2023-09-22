import React from "react";
import { View,StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { userAtom } from "../../store/userStore";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Header(){

    const [user, setUser] = useRecoilState(userAtom) 
    const navigation = useNavigation()

    function Logout(){
        setUser({
            ...user,
            logged: false
        })
        navigation.navigate("Login" as never)
    }

    return(
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.textWelcome}>Welcome,</Text>
                <Text style={styles.title}>{user.firstName}</Text>
            </View>
            <TouchableOpacity style={styles.logout} onPress={() => {Logout()}}>
                <MaterialIcons name="logout" size={34} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row"
    },
    container:{
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
    logout:{
        width: "25%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }

})