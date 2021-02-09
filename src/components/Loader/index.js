import { Dialog , DialogContent , CircularProgress , Grid} from '@material-ui/core';
import {Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
function Loader({open}) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            aria-labelledby="confirmation-dialog-title"
        >
            <DialogContent>
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        </div>
    )
}
Loader.propTypes = {
    open: PropTypes.bool.isRequired
};

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      width: '80%',
      maxHeight: 435,
    }
}));
export default Loader;