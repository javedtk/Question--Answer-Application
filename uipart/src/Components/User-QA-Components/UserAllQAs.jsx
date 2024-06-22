import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { getallUserqa } from '../../service/UserQAapi';
import { Link } from 'react-router-dom';
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

const UserAllQAs = () => {

    const classes = useStyle();

    const [userqa, setqa] = useState([]);
    useEffect(() => {
        getUserQA();
    }, [])

    const getUserQA = async () => {
        const response = await getallUserqa();  //getting the details of all the menu items
        console.log(response);
        setqa(response.data);
    }

    return (
        //displaying the menu items
        <div className='bg-img' style={myComponent}>
        <Table className={classes.table}>
            
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Questions</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    userqa.map((data) => (
                        <TableRow className={classes.trow}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.question}</TableCell>
                            <TableCell>{data.status}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/usertoadminupdate/${data.id}`}>Update the status</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </div>
    )
}

export default UserAllQAs;
