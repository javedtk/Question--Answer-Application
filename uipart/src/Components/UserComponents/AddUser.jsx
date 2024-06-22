import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../service/userApi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialValue = {  //declaring the user properties
    name: "",
    username : "",
    password : "",
    email: "",
    phone: "",
}

const AddUser = () => {   //method to add the users by admin

    const [user, setUser] = useState(initialValue);
    const {name, username, password, email, phone} = user;

    const history = useHistory();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       history.push('/all');
       notify("New user is added successfully");
    }
    const notify = (msg) => {

        toast.success(msg, {

            position: 'top-right',
             autoClose: 3000, 
             hideProgressBar: true, 
             closeOnClick: false,

            pauseOnHover: true,
             draggable: false,
              progress: undefined,
               theme: 'colored'

        });
    }
    return (

        //form to add user details
        
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add User Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="password" value={password} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addUserDetails() } color="primary" align="center">Add User</Button>
                    <Button onClick={()=> history.push("/all")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddUser;