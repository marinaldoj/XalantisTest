import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import Pokemons from "../components/Pokemons";
import axios from "axios";

interface IPokemon{
    name: string;
    url: string;
}

export default function Pokemon(){

    const [pokemons, setPokemons] = useState<Array<IPokemon>>([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon-habitat/rare")
        .then((resp) => {
            setPokemons(resp.data.pokemon_species)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    return(
        <AuthLayout>
            {pokemons.map((poke, index) => {
                return(
                    <Pokemons key={index} name={poke.name}/>
                )
            })}
        </AuthLayout>
    )
}