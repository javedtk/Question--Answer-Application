import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { blue} from '@material-ui/core/colors';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'blue'
    },
    spacing: {
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    spacing1: {
        paddingLeft: 1000,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="admin-register" className={classes.spacing}>Admin</NavLink>
                <NavLink to="user-register" className={classes.spacing}>User</NavLink>
                <NavLink to="/" className={classes.spacing1}> Home</NavLink>

            </Toolbar>
        </AppBar>

    )
}

export default Navbar;