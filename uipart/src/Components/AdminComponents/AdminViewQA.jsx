import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button,FormLabel } from '@material-ui/core';
import { getQuestion } from '../../service/QAapi';
import {deleteAns, addAns,getallAns } from '../../service/AnsApi';
import { useParams } from 'react-router-dom';
import './viewQA.css'
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

//function to view answer for question from admin perspective
const AdminViewQA = () => {  

    let finalQuestion;

    const [ans, setqa] = useState('');
    const { question, answer } = ans;
    const { id } = useParams();   
   
    //---------------------

    useEffect(() => {   //calling the method that fetches the data through axios
        loadqaData();
    }, []);

    //function to load the details into a constant variable
    const loadqaData = async () => {
        const response = await getQuestion(id);    
        setqa(response.data);

         finalQuestion = response.data.question ;
    }
//-------------------------------------
    const onValueChange = (e) => {
        setqa({ ...ans, [e.target.name]: e.target.value });   //handling the changed form data
    }
    //function to add Answer
    const addAnswerData = async () => {
        await addAns(ans);    //saving the answer
        notify("Answer is added succeessfully")  //toastify notification
    }
    //function to create the toast notification
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
//---------------------

const [answers, setAnswers] = useState([]);

useEffect(() => {
    getAns();      //calling method to fetch the answers from database through axios
}, [])

//function to fetch the answers
const getAns = async () => {
    const response = await getallAns();

    for(let i=0 ; i<response.data.length ; i++)  //looping through all the answers
    {
        if(response.data[i].question === finalQuestion)   //checking whether the question is equal to the selected question
        {
            console.log(response.data[i]);
            setAnswers(response.data);
        }
    }      
    }
   
//-------------
//function to delete the answers
const deleteAnswerData = async (id) => {
    await deleteAns(id);  
    notify("Answer is deletd");        
    getAns();
}


    return (

        //Answer addition form
        <div className='bg-img' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" >See All the Answers of this Question</Typography>
                <br/><br/>

                <FormGroup>

                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name="question" value={question} disabled />
                    </FormControl>
                        <br/>

                    <FormControl>
                        <FormLabel>Answer</FormLabel>
                        <Input type='text' onChange={(e) => onValueChange(e)} name="answer" value={answer} />
                    </FormControl>
                        
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addAnswerData()} color="primary" align="center">Add Answer</Button>
                    </Box>

                </FormGroup>
            </Box>
        </Container>

          <div className='container mt-5'>
          <form >
              <table id="customers">
                <thead>
                        <tr> 
                            <th style={{'textAlign': 'center'}}>Answer for this question</th> 
                            <th>Action</th>             
                        </tr>
                </thead>
                <tbody>
                    {
                         answers.map((data) => (
                            <tr>
                                <td>{data.answer} </td>
                                <td>
                                     <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteAnswerData(data.id)}>Delete</Button>
                                </td>
                            </tr>
                         ))
                    }
                </tbody>

              </table>
        </form>
      </div> 
   </div>    
    )
}


export default AdminViewQA;  //exporting the return value from AdminViewQA