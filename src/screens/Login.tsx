import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import Pokemons from "../components/Pokemons";
import axios from "axios";
import UnAuthLayout from "../components/Layouts/UnAuthLayout";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/userStore";
import { useNavigation } from "@react-navigation/native";

interface IPokemon{
    name: string;
    url: string;
}

export default function Login(){

    const { logged, mail, password } = useRecoilValue(userAtom);
    const navigation = useNavigation()

    useEffect(() => {
        if(logged){
            navigation.navigate("Pokemon" as never)
        }
    },[logged])

    const [login, setLogin] = useState({
        mail: "",
        password: ""
    })

    const [errors, setErrors] = useState(false)

    function onSubmit(){
        if(login.mail === "" && login.password === ""){
            return
        }else{
            if(mail === login.mail && password === login.password){
                navigation.navigate("Pokemon" as never)
            }else{
                setErrors(true)
            }
            
        }
    }

    return(
        <UnAuthLayout>
            <View style={styles.containerTexts}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.text}>Sign in to continue</Text>
                </View>
                <View style={styles.containerTexts}>
                    <InputLabel 
                        name="Email"  
                        handleChange={(e) => {
                            setLogin({...login, mail: e})
                            setErrors(false)
                        }}
                        error={errors}
                    />
                    <InputLabel 
                        name="Password" 
                        handleChange={(e) => {
                            setLogin({...login, password: e})
                            setErrors(false)
                        }}
                        secure={true}
                        error={errors}
                    />
                    <Button name={"Log In"} handlePress={() => onSubmit()} />
                </View>
                <TouchableOpacity 
                    style={styles.containerTexts} 
                    onPress={() => navigation.navigate("Singup" as never)}
                >
                    <Text style={styles.text}>Sign up</Text>
                </TouchableOpacity>
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