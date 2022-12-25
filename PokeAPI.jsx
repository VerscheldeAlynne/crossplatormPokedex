import React, {useState, useEffect} from "react";


export default function PokeAPI(){
    const [name, setname] = useState("");
    const [Find, setFind] = useState("");
    const [Img, setImg] = useState("");
    const [Type, setType] = useState("");

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(json => console.log(json))
        },[]);

}