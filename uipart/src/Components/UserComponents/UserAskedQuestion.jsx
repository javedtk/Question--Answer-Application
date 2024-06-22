import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUserqa } from '../../service/UserQAapi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const myComponent = {
    width: '1300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top:'150px',
    left:'0px'
};
const initialValue = {  //declaring the item details
    question: "",
}

const AddQA = () => {          //method to add menu items

    const [userqa, setUserqa] = useState(initialValue);
    const { question } = userqa;   //defining the properties of each item

    const history = useHistory();

    const onValueChange = (e) => {
        setUserqa({ ...userqa, [e.target.name]: e.target.value });
        console.log(userqa);
    }

    const addQADetails = async () => {
        await addUserqa(userqa);
        notify("Mail has been sent to the Admin successfully");
       history.push('/user');
   
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

        //form to add menu items
        <div className='bg-img' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Ask A  Question</Typography>
                <FormGroup>
                <FormControl>
                    <InputLabel>Enter the Question</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="question" value={question} />
                </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addQADetails()} color="primary" align="center">Submit</Button>
                        <Button onClick={() => history.push("/user")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
        </div>
    )
}


export default AddQA;