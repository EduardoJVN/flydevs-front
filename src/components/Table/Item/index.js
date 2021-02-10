import react , {Fragment} from 'react'
import {Button,Card, TextField, Container, Box, CircularProgress , Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export default function Item ({pokemons}){
    return(
        <Fragment>
            {pokemons.map((data, index) => (
                <Grid item xs={12} className="itemList" key={index}>
                    <Box border={1}>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
                                <img style={{ width: '100%', height: 150 }}  src={data.image} className="image" />
                            </Grid>
                            <Grid item xs={8} sm={8} md={10} lg={10} xl={10}>
                                <Typography component="h5" variant="h5">
                                    {data.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            ))}
        </Fragment>
        
    )
}