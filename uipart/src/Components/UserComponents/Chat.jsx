import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button,FormLabel, colors } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getallChats,addChat, getChat} from '../../service/chatapi';
toast.configure();
const myComponent = {
    width: '1300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top:'150px',
    left:'0px',
};
const Chat = () => {  

    const  userName =  localStorage.getItem('Uname');
    const [chat, setChat] = useState('');
    const { username, message, image } = chat;
    const { id } = useParams();   
   
    //---------------------


    
    useEffect(() => {

        loadChatData();
    }, []);

    const loadChatData = async () => {
        const response = await getChat(id);    
        setChat(response.data);

    }
//-------------------------------------
    const onValueChange = (e) => {
        setChat({ ...chat, [e.target.name]: e.target.value });
    }
    const addUserChat = async () => {
        const chatNew = {
            username:userName,
            message:chat.message,
            image:chat.image
        }
        await addChat(chatNew);
        notify("Message is Posted succeessfully")
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

const [userChat, setUserChat] = useState([]);

useEffect(() => {
    getChats();
}, [])

const getChats = async () => {
    const response = await getallChats();
        console.log(response);                   //displaying all users details
        setUserChat(response.data);
    }
   
//-------------




    return (

        //menu edit form
        <div className='bg-img' style={myComponent}>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" >Type your Message here</Typography>
                <br/><br/>

                <FormGroup>
                <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type='text'  onChange={(e) => onValueChange(e)} name="userName" value={userName} disabled />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Input type='text' onChange={(e) => onValueChange(e)} name="message" value={message} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input type='text' onChange={(e) => onValueChange(e)} name="image" value={image} />
                        
                    </FormControl>
                        
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addUserChat()} color="primary" align="center">Post</Button>
                    </Box>

                </FormGroup>
            </Box>
        </Container>
                <center><h1>Chat Box</h1></center>
          <div className='container mt-5'>
          <form >
              <table id="customers">
                <thead>
                        <tr> 
                            <th>Username</th> 
                            <th>Message</th>   
                            <th>Image</th>             
                        </tr>
                </thead>
                <tbody>
                    {
                         userChat.map((data) => (
                            <tr>
                                <td>{data.username} </td>
                                <td>{data.message} </td>
                                <td><a href={data.image}><img src={data.image} style={{ 'borderRadius': '80px',height:'60px',width:'80px'}} alt="no image" /></a></td>

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


export default Chat;