import axios from "axios";
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

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp) => {
            setPokemonInfo({
                species: resp.data.species,
                sprites: resp.data.sprites
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{
                name[0].toUpperCase() + name.substring(1)
            }</Text>
            <Image 
                style={styles.imageStyle}
                source={{
                    uri: pokemonInfo.sprites.front_default
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