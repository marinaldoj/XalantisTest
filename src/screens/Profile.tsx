import React, { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/userStore";

export default function Profile(){

    const [user, setUser] = useRecoilState(userAtom) 
    const [data, setData] = useState(user)

    function onSubmit(){
        setUser(data)
    }

    return(
        <AuthLayout>
            <View style={styles.container}>
                <Text style={styles.title}>User</Text>
                <InputLabel 
                    name="First name" 
                    handleChange={(e) => setData({...data, firstName: e})} 
                    currentValue={data.firstName}
                />
                <InputLabel 
                    name="Last name" 
                    handleChange={(e) => setData({...data, lastName: e})} 
                    currentValue={data.lastName}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Address</Text>
                <InputLabel 
                    name="Country" 
                    handleChange={(e) => setData({...data, address: e})} 
                    currentValue={data.address}
                />
                <InputLabel 
                    name="Street" 
                    handleChange={(e) => setData({...data, street: e})} 
                    currentValue={data.street}
                />
                <InputLabel 
                    name="Zip code" 
                    handleChange={(e) => setData({...data, zipcode: e})} 
                    currentValue={data.zipcode}
                />
            </View>

            <View style={styles.lastView}>
                <Button name="Save" handlePress={() => {
                    onSubmit()
                    Alert.alert("Info!","Data changed successfully!")
                }} />
            </View>
            
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 10,
        marginBottom: 10
    },
    title:{
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 20,
    },
    lastView: {
        width: "100%",
        height: 120,
        alignItems: "center"
    }
})