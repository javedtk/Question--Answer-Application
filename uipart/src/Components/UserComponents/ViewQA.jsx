import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button,FormLabel } from '@material-ui/core';
import { getQuestion } from '../../service/QAapi';
import { addAns,getallAns, getAns } from '../../service/AnsApi';
import { useParams } from 'react-router-dom';
import './viewQA.css'
import '../../App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const myComponent = {
    width: '1300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top:'150px',
    left:'0px',
};
const ViewQA = () => {  

    let finalQuestion;

    const[answ,SetAnsw] = useState('');
    const [ans, setqa] = useState('');//method to edit the menu details
    const { question, answer } = ans;
    const { id } = useParams();   //identifying the menu items by id
   
    //---------------------

    useEffect(() => {
        loadqaData();
    }, []);

    const loadqaData = async () => {
        const response = await getQuestion(id);    //getting menu details by id
        setqa(response.data);

         finalQuestion = response.data.question ;
    }
//-------------------------------------
    const onValueChange = (e) => {
        setqa({ ...ans, [e.target.name]: e.target.value });
    }
    const addAnswerData = async () => {
        await addAns(ans);
        notify("Answer is added successfully");
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
//---------------------
const [answers, setAnswers] = useState([]);

useEffect(() => {
    getUsers();
}, [])

const getUsers = async () => {
    const response = await getallAns();

    for(let i=0 ; i<response.data.length ; i++)
    {
        if(response.data[i].question === finalQuestion)
        {
            console.log(response.data[i]);
            setAnswers(response.data);
           // SetAnsw(response.data[i]);
        }
    }
        
    }
//-------------

    return (

        //menu edit form
        <div className='bg-img' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" color="primary" align="center" >See All the Answers of this Question</Typography>
                <br/><br/>

                <FormGroup>

                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} color= "primary" name="question" value={question} disabled />
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
                        </tr>
                </thead>
                <tbody>
                    {
                         answers.map((data) => (
                            <tr>
                                 <td>{data.answer}</td>
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


export default ViewQA;