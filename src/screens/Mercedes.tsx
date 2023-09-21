import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import AuthLayout from "../components/Layouts/AuthLayout";
import axios from "axios";
import Cars from "../components/Cars";

interface ICars{
    codigo: number;
    nome: string;
}

export default function Mercedes(){

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas/39/modelos",{
        }).then((resp) => {
            setCars(resp.data.modelos)
        })
        .catch((err) => console.log(err))
    },[])

    return(
        <AuthLayout>
            {cars.map((car:ICars, index:number) => {
                return(
                    <Cars key={index} name={car.nome} />
                )
            })}
            {cars.length == 0 && <Text>Loading...</Text>}
        </AuthLayout>
    )
}