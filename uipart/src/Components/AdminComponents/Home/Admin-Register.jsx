import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addAdmin} from '../../../service/adminApi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const initialValue = {    //declaring the initial values for user details
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
}

//user registration method
const AdminRegister = () => {   

    const [admin, setAdmin] = useState(initialValue);
    const { name, username, password, email, phone } = admin;

    const history = useHistory();   //declaring the history variable to redirect to another page

    const onValueChange = (e) => {
        //  console.log(e);
        // console.log(e.target.value);
        setAdmin({ ...admin, [e.target.name]: e.target.value });    //handling the changes in Admin registration form
        console.log(admin);
    }

     //function to create toast notification
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

    //function to add admin details
    const addAdminDetails = async () => {
        await addAdmin(admin);        //saving admin details
        notify("Admin Register Successfully")  //toastify notification
        history.push('/admin-login');  //redirecting to admin login page
    }

    return (

        //Admin registration form
        <div className = "bg">
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Admin Registration Form</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="name" value={name} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>User Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={username} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="password" value={password} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" value={email} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} required/>
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addAdminDetails()} color="primary" align="center">Register</Button>
                        <Button onClick={() => history.push("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/admin-login")} color="primary" align="center">Login</Button>

                    </Box>
                </FormGroup>
            </Box>
        </Container>
        </div>
    )
}


export default AdminRegister;