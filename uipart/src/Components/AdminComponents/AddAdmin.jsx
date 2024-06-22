import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addAdmin } from '../../service/adminApi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialValue = {  //initializing the admin details
    name: "",
    username : "",
    password : "",
    email: "", 
    phone: "",
}

//method to add new admin
const AddAdmin = () => {   

    const [admin, setAdmin] = useState(initialValue);    
    const {name, username, password, email, phone} = admin;  

    const history = useHistory();    //declaring the history variable to redirect to another page

    const onValueChange = (e) =>
    {
        setAdmin({...admin, [e.target.name]: e.target.value});
       console.log(admin);
    }
 
    //method to add admin details
    const addAdminDetails = async () =>{
       await addAdmin(admin);     //adding admin details through await from axios
       history.push('/alladmins');  //redirecting page to the all admins
       notify("Admin details are added successfully");  //toast notification
    } 

    //method to generate the toast notification
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

        //form to add Admin details
        <div className = "bg3">
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add Admin Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} required />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username}  required/>
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="password" value={password} required />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email}  required/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone}  required/>
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addAdminDetails() } color="primary" align="center">Add Admin</Button>
                    <Button onClick={()=> history.push("/alladmins")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
        </div>
    )
}


export default AddAdmin;  //exporting the return value from AddAdmin function