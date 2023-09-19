import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import Pokemons from "../components/Pokemons";

interface IPokemon{
    name: string;
    url: string;
}

export default function Pokemon(){

    const [pokemons, setPokemons] = useState<Array<IPokemon>>([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-habitat/rare")
        .then(response => response.json())
        .then(pokemon => setPokemons(pokemon.pokemon_species))
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

const styles = StyleSheet.create({
    container: {}
})