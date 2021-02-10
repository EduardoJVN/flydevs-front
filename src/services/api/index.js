import axios from "axios";
import {route} from "../config"
//traer listado de pokemons 20 (sin capturar)
export const getPokemons = async () =>{
    const data = axios.get(`${route}pokemons/`).then((res)=>{
        return {message:res.data,error:false}
    }).catch(err=>{
        return {message:err.response.data.message,error:true}
    })
    return data
}


//busqueda de pokemon
export const searchPokemons = async (text) =>{
    const data = axios.get(`${route}pokemon/${text}`).then((res)=>{
        return {message:res.data,error:false}
    }).catch(err=>{
        return {message:err.response.data.message,error:true}
    })
    return data
}