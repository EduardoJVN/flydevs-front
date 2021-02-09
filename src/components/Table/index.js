import react from 'react'
import {Button,Card, TextField, Container, Box, CircularProgress , Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export const Table = ({quantity}) =>{
    
    return(
        <Grid item xs={12}>
            <Typography variant="h6" component="h1" gutterBottom>
                {quantity > 0 ? 'Resultados de la búsqueda' : 'No hay resultados de la búsqueda'}
                
            </Typography>
        </Grid>
    )
}