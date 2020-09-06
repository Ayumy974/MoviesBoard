import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

export default function EditButton({onEditMovie}) {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={onEditMovie}>
            <IconButton>
                <EditIcon />
            </IconButton>
        </div>
    );
}

