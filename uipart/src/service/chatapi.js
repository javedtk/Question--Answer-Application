import axios from 'axios';


const url = "http://localhost:8085/api/chat";
const allChat = "http://localhost:8085/api/chats";


export const getallChats = async (id) => {
    id = id || '';
    return await axios.get(`${allChat}/${id}`);
}
export const getChat = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}


export const addChat = async (chat) => {
    return await axios.post(url,chat);
}