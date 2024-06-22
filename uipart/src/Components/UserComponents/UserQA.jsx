import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { getallqa } from '../../service/QAapi';
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

const UserQA = () => {

    const classes = useStyle();

    const [search, setSearch] = useState('');
    const [qa, setqa] = useState([]);
    useEffect(() => {
        getQA();
    }, [])

    const getQA = async () => {
        const response = await getallqa();  //getting menu details from the menu api for user
        console.log(response);
        setqa(response.data);
    }



    return (

        <div className='bg-img' style={myComponent}>
            <center>

                <br />

                <input className={classes.trow} type="search" placeholder="Search…"

                    inputprops={{ 'aria-label': 'search' }}

                    style={{ border: '2px solid red', padding: '15px' }}

                    value={search} onChange={(e) => setSearch(e.target.value)} /><br />

            </center>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Questions</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        qa.filter(x => x.question.toLowerCase()

                            .includes(search.toLowerCase())).map((data, index) => {



                                return (

                                    <TableRow className={classes.trow} key={index} >

                                        <TableCell>{data.id}</TableCell>

                                        <TableCell style={{ textAlign: "center" }}>{data.question}</TableCell>

                                        <TableCell>

                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/view/${data.id}`}>View</Button>

                                        </TableCell>

                                    </TableRow>

                                )

                            })

                    }

                </TableBody>
            </Table>
        </div>

    )
}

export default UserQA;
