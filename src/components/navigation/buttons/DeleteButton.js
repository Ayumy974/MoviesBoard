import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

export default function DeleteButton({onDeleteMovie, showMessage}) {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={() => { onDeleteMovie(); showMessage();}}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}
