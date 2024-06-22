import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl,FormLabel,Radio,RadioGroup,FormControlLabel,InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUserqa, getUserQuestion } from '../../service/UserQAapi';
import { useHistory, useParams } from 'react-router-dom';
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

const initialValue = {
    question: "",
    status:""

}

const UserEditQA = () => {   //method to edit the menu details

    const [qa, setqa] = useState(initialValue);
    const { question,status } = qa;

    const { id } = useParams();   //identifying the menu items by id

    useEffect(() => {
        loadqaData();
    }, []);

    const loadqaData = async () => {
        const response = await getUserQuestion(id);    //getting menu details by id
        setqa(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) => {
        //  console.log(e);
        // console.log(e.target.value);
        setqa({ ...qa, [e.target.name]: e.target.value });
        console.log(qa);
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
    const editqaDetails = async () => {    //editing the menu details
        notify("Status Updated");
        await editUserqa(id, qa);
        history.push('/usertoadminqa');
    }

    return (

        //menu edit form
        <div className='bg-img' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Update User Question Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Questions</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="question" value={question} disabled />
                </FormControl>
                <FormControl>
                        <InputLabel>Status</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="status" value={status} />
                    </FormControl>
                    
                
                    <Box my={3}>
                        <Button variant="contained" onClick={() => editqaDetails()} color="primary" align="center">Update user Question</Button>
                        <Button onClick={() => history.push("/usertoadminqa")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
        </div>
    )
}


export default UserEditQA;