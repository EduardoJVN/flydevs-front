import axios from "axios";
import {route} from "../config"
//traer listado de pokemons 20 (sin capturar)
export const getPokemons = async () =>{
    const data = axios.get(route+"pokemons").then((res)=>{
        return res.data
    }).catch(err=>{
        return err.response
    })
    return data
}


//busqueda de pokemon
export const searchPokemons = async (text) =>{
    const data = axios.get(route+"pokemon/"+text).then((res)=>{
        return res.data
    }).catch(err=>{
        return err.response
    })
    return data
  }