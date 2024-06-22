import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editAdmin, getallAdmin } from '../../service/adminApi';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const myComponent = {
    width: '1300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top: '150px',
    left: '0px'
};

//initializinig the values of admin details
const initialValue = {
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
}

//method to edit the Admin details
const EditAdmin = () => {

    const [admin, setAdmin] = useState(initialValue);
    const { name, username, password, email, phone } = admin;

    const { id } = useParams();
    useEffect(() => {
        loadAdminData();  //calling function to fetch the admin data from database through axios
    }, []);

    //function to fetch the admin details
    const loadAdminData = async () => {
        const response = await getallAdmin(id);  //getting admin details by id
        console.log(response.data);
        setAdmin(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) => {

        setAdmin({ ...admin, [e.target.name]: e.target.value });   //handling the changes in the admin details updating form
        console.log(admin);
    }

    //function to edit the admin details
    const editAdminDetails = async () => {
        await editAdmin(id, admin);     //calling method from axios to update the admin details
        history.push('/alladmins');     //redirecting to the alladmins page
        notify("Admin details are updated successfully");  //toastify notification
    }

    //toast notification creation function
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

        //Admin details edit form
        <div className='bg-img' style={myComponent}>
            <Container maxWidth="sm" >
                <Box my={5}>
                    <Typography variant="h5" align="center">Update Admin Details</Typography>
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
                            <Button variant="contained" onClick={() => editAdminDetails()} color="primary" align="center">Update Admin</Button>
                            <Button onClick={() => history.push("/alladmins")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default EditAdmin;  //exporting the return values from the Edit Admin function