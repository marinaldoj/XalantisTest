import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import Pokemons from "../components/Pokemons";
import axios from "axios";
import UnAuthLayout from "../components/Layouts/UnAuthLayout";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../store/userStore";
import { useNavigation } from "@react-navigation/native";

interface IPokemon{
    name: string;
    url: string;
}

export default function Login(){

    const [user, setUser] = useRecoilState(userAtom);
    const navigation = useNavigation()

    const [singUp, setSingUp] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        password: "",
        logged: false
    })

    function onSubmit(){
        if(singUp.mail === "" && singUp.password === ""){
            return
        }else{
           setUser(singUp)
           navigation.navigate("Login" as never)
        }
    }


    return(
        <UnAuthLayout height={"80%"}>
            <View style={styles.containerTexts}>
                    <Text style={styles.title}>Sing Up</Text>
                </View>
                <View style={styles.containerTexts}>
                <InputLabel 
                        name="First Name"  
                        handleChange={(e) => {
                            setSingUp({...singUp, firstName: e})
                        }}
                    />
                    <InputLabel 
                        name="Last Name" 
                        handleChange={(e) => {
                            setSingUp({...singUp, lastName: e})
                        }}
                    />
                    <InputLabel 
                        name="Mail"  
                        handleChange={(e) => {
                            setSingUp({...singUp, mail: e})
                        }}
                    />
                    <InputLabel 
                        name="Password" 
                        handleChange={(e) => {
                            setSingUp({...singUp, password: e})
                        }}
                        secure={true}
                    />
                    <Button name={"Log In"} handlePress={() => onSubmit()} />
                </View>
        </UnAuthLayout>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 14,
        fontWeight: "500",
        color:"#979797",
        marginBottom: -4
    },
    title: {
        fontSize: 40,
        fontWeight: "500",
        color:"#272829"
    },
    containerTexts:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})