import React, { useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button, FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialValue = {     //declaring the initial values for admin login
    username: "",
    password: ""
}


//Admin login validation method
function AdminLogin() {
    const [db, setDb] = useState(initialValue);
    const history = useHistory();    //declaring the history variable to redirect to another page

    const onValueChange = (e) => {

        setDb({ ...db, [e.target.name]: e.target.value });    //handling the form data on change
        console.log(db);
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
    //method to check whether admin is present
    async function AdminPresent(data) {
        let check_data = await fetch("http://localhost:8081/api/admins");  //fetching the admin details from backend
        let check = await check_data.json();     //transforming the fetched data into json format
        let flag = false;
        console.log(check);
        for (let i = 0; i < check.length; i++) {  //looping through the fetched admin details
            if (check[i].username === data.username && check[i].password === data.password) { //validating the admin credentials
                flag = true;
                sessionStorage.setItem("admin", JSON.stringify(check[i]));   //saving admin username
            }
        }
        if (flag === true) {
            notify("Login success");  //alert after successful admin login
            history.push("/admin");
        }
        else {
            notify("Please Enter corect username and password")  //alert after unsuccessful admin login
        }
    }
    return (

        //Admin login form
        <div className = "bg">
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Admin Login</Typography>
                <br/>
                <FormGroup>
                    <FormControl>
                    <FormLabel> Enter the username</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={db.username} />
                    </FormControl>
                    <br/>
                    <FormControl>
                    <FormLabel> Enter the password</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name="password" value={db.password} type="password" />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => AdminPresent(db)} color="primary" align="center">Login</Button>
                        <Button onClick={() => history.push("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        Click here to Register <Button variant="contained" onClick={() => history.push("/admin-register")} color="primary" align="center">Registration</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
        </div>
    )

}
export default AdminLogin;