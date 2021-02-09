import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Card, TextField, Container, Box, CircularProgress , Grid} from '@material-ui/core';

import Loader from "../../components/Loader"
import SnackbarAlert from "../../components/SnackbarAlert"
import { getPokemons , searchPokemons } from '../../services/api';
import { Item } from '../../components/Table/Item';
import {Table} from '../../components/Table';

export default  function App() {
  
  const [pokemons,setPokemons] = useState([])
  const [open,setOpen] = useState(true)
  const [openSnack,SetOpenSnack] = useState({view:false,text:""})
  const [text,setText] = useState("")
  const [errorName,setErrorName] = useState(false)
  const classes = useStyles();

  useEffect(async () => {
    await getPokemonHandler()
  },[]);

  const getPokemonHandler = async () => {
      try{
        setOpen(true)
        const response = await getPokemons()
        if(response){
            setPokemons(response)
        }
        setOpen(false)
      }catch(err){
        console.log(err)
        setOpen(false)
      }
  }

  const searchPokemonHandler = async () => {
    try{
      if(text == ""){
        setErrorName(true)
        return
      }
      setErrorName(false)
      setOpen(true)
      
      const response = await searchPokemons(text)
      console.log("aaaa",response)
      setPokemons(response)
      setOpen(false)
    }catch(err){
      console.log(err)
      setOpen(false)
    }
  }

  const setNameHandler = (event) =>{
    setText(event.target.value)
  }


  
  return (
    <div className={classes.root}>
      <Loader open={open}/>
      <SnackbarAlert openSnack={openSnack}/>
      <Container component="main" >
        <Typography variant="h2" component="h1" gutterBottom>
          Pokemon finder
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" >El que quiere pokemons, que los busque.</Typography>
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <TextField label="Nombre del pokemon" className={classes.input} onChange={setNameHandler} error={errorName}/>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained" className={classes.button} onClick={searchPokemonHandler}>Buscar</Button>
            </Grid>
        </Grid>
            
        <Grid container spacing={3}>
        <Table quantity={pokemons.length}/>
        {pokemons.map((data, index) => (
            <Item data={data} key={index}/>
        ))}
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    input: {
        width:'100%'
    },
    button: {
        width:'100%',
        marginTop:12
    }
}));