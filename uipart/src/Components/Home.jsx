import React from 'react';

import { Container, Typography, Box } from '@material-ui/core';

import './Home.css'



const Home = () => {

    return (

        <Container maxWidth="lg">

            <Box my={5}>

           

            <Typography className='text' variant="h1" component="h1" align="center">

                 Welcome To 
                 <br/>
                  Do-Connect
                  <br/>
             

                </Typography>

           

            </Box>

        </Container>

    )

}

export default Home;