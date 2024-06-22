import React from 'react';
import { AppBar, makeStyles, Toolbar,Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './style.css';
import LogoutIcon from '@mui/icons-material/Logout';

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
    spacing2: {
        paddingLeft: 200,
    },
    spacings:{
        marginLeft:'60%',
    },
    chat:{
        marginright:'30%',
    },
    logout:{
        paddingleft:10
    }
});
//user navigation bar
const UserNavbar = () => {
    const classes = useStyles();
    return (
        //creating navlinks for the user operations
        <AppBar className={classes.header} position="static">
            <Toolbar >

            <NavLink to="/userqa" className={classes.spacing}><em>All Questions</em></NavLink>
            <NavLink to="/UserAskedQuestion" className={classes.spacing}><em>Ask a Question</em></NavLink>

            <NavLink to="/chat" className={classes.spacing2}>
                    <Button variant="contained" color="light" style={{ margin: '0px 20px' }}> Chat </Button>
            </NavLink>
            
            <NavLink to="/" className={classes.spacing1}><em><LogoutIcon/>Log Out😊</em> </NavLink>

            </Toolbar>
        </AppBar>
    )
}
export default UserNavbar;