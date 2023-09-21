import React, { useState } from "react";
import { View,StyleSheet, Text, TextInput } from "react-native";

interface IInput{
    name: string;
    handleChange: (text:string) => void,
    secure?: boolean,
    error?: boolean,
    currentValue?: string,
}

export default function InputLabel({
    name,
    handleChange,
    secure = false,
    error = false,
    currentValue = ""
}:IInput){

    const [value, setValue] = useState(currentValue)
    const styles = getStyles(error);

    return(
        <View style={styles.container}>
           <Text style={styles.text}>{name}</Text>
           <TextInput 
            style={styles.inputContainer} 
            value={value}
            secureTextEntry={secure}
            onChangeText={(text:string) => {
                setValue(text)
                handleChange(text)
            }}
           />
        </View>
    )
}

const getStyles = (error:boolean) => StyleSheet.create({
    container: {
        width: "100%",
        height: 85,
        marginBottom: 10,
        justifyContent: "space-between"
    },
    text:{
        fontSize: 14,
        fontWeight: "500",
        color: "#979797"
    },
    inputContainer: {
        width: "100%",
        height: "80%",
        backgroundColor: "#D0D0D0",
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: "red",
        borderWidth: error ? 1 : 0
    }

})