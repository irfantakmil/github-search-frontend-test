import React,{useState} from 'react';


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableHead } from '@mui/material';




const Repositories = ({name, repos}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    // const getReposName = (repositoriesName) => {
    //     setReposName(repositoriesName);
    // }

    // const getLanguages = () => {
    //     dispatch(getReposLanguages(name, reposName))
    // }
   
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="repos-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Languages</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {   
                        repos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item)=>(
                            <TableRow 
                                key={item.id}
                                sx={{border:0}}
                            >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                {/* <TableCell component="th" scope="row">
                                    {/* <a href={item.languages_url}>{item.languages_url}</a> */}
                                    {/* <Languages
                                        languagesUrl={item.languages_url}
                                    /> */}
                                {/* </TableCell> */} 
                                <TableCell component="th" scope="row">
                                    {item.language}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10,20]}
                component="div"
                count={repos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default Repositories;