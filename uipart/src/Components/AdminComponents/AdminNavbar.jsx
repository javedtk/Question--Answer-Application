import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';
import './style.css';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'green',
    },
    spacing: {
        paddingLeft: 60,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    spacing1: {
        paddingLeft: 500,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    spacings:{
        paddingLeft: '50%' ,
    }
});

//Admin navbar function
const AdminNavbar = () => {
    const classes = useStyles();
    return (
        //creating the navlinks for the admin operations.
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/alladmins" className={classes.spacing}><em>All Admins</em></NavLink>

                <NavLink to="/all" className={classes.spacing}><em>All Users</em></NavLink>

                <NavLink to="/qa" className={classes.spacing}><em>All Questions</em></NavLink>

                <NavLink to="/usertoadminqa" className={classes.spacing}><em>Questions to Approve</em></NavLink>

                <NavLink to="/" className={classes.spacing1}><em>Log out😊</em> </NavLink>

                
            </Toolbar>
        </AppBar>
    )
}

export default AdminNavbar;  //exporting the return value of Admin Navbar function