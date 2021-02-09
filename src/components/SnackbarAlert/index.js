import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
export default function SnackbarAlert({openSnack}) {
    const classes = useStyles();
    return(
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={openSnack.view}
            message={openSnack.text}
        />
    )
}
SnackbarAlert.propTypes = {
    openSnack: PropTypes.object.isRequired
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