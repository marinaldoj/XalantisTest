import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface IPoke{
    name: string
}


export default function Pokemons({name}:IPoke){

    const [pokemonInfo, setPokemonInfo] = useState({
        species: {
            name: name
        },
        sprites:{
            front_default: "https://pokeapi.co/static/pokeapi_256.3fa72200.png"
        }
    })

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //     .then(response => response.json())
    //     .then(pokemon => setPokemonInfo(pokemon))
    // },[])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{
                name[0].toUpperCase() + name.substring(1)
            }</Text>
            <Image 
                style={styles.imageStyle}
                source={{
                    uri: "https://pokeapi.co/static/pokeapi_256.3fa72200.png"
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 20,
        alignItems: "center"
    },
    text:{
        fontSize: 20,
        fontWeight: "500",
        color: "#FFFFFF"
    },
    imageStyle:{
        width: 100,
        height: 100,
        borderRadius: 100
    }
})