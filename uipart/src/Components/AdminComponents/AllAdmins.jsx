import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteAdmin, getallAdmins } from '../../service/adminApi';
import { Link } from 'react-router-dom';
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

//Method to display all Admins
const AllAdmins = () => {

    const classes = useStyle();
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        getAdmins();    //calling function to fetch the admin details from database through axios
    }, [])

    //function to get the admin details
    const getAdmins = async () => {
        const response = await getallAdmins();      //storing the admin details into a constant variable
        console.log(response);                   //displaying all Admin details on console
        setAdmin(response.data);
    }

    //function to delete admin
    const deleteData = async (id) => {
        await deleteAdmin(id);           //deleting the admin by id
        notify("Admin is deleted");    //tpastify notification
        getAdmins();      //calling getAdmins function to display the admin details
    }

    //toast notification function
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
        //displaying the all Admin data
        <div className='bg-img' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <Button variant="contained" color="primary" style={{ margin: '0px 20px', marginBottom: '20%' }} component={Link} to={`/addadmins`}>Add Admin</Button>
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

                        admin.map((data) => (
                            <TableRow className={classes.trow}>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.username}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/editadmin/${data.id}`}>Edit</Button>
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

export default AllAdmins;  //exporting the return value from AllAdmins function
