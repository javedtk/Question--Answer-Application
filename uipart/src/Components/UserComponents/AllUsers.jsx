import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteUser, getallUsers } from '../../service/userApi';
import { Link } from 'react-router-dom';
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

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

const AllUsers = () => {         //Method to display all users

    const classes = useStyle();

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await getallUsers();
        console.log(response);                   //displaying all users details
        setUser(response.data);
    }

    const deleteData = async (id) => {
        notify("User is deleted");
        await deleteUser(id);           //deleting the user by id
        
        getUsers();
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
        //displaying the all user data
        <div className='bg-img' style={myComponent}>
        <Table className={classes.table}>
             <TableHead>
             <Button variant="contained" color="primary" style={{ margin: '0px 20px' ,marginBottom:'20%' }} component={Link} to={`/add`}>Add User</Button>
                <TableRow className={classes.thead}>
                    
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            
                {
                     
                    user.map((data) => (
                        <TableRow className={classes.trow}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/edit/${data.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </div>
    )
}

export default AllUsers;
