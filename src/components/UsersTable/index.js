import React from "react";
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import Pages from "../Pagination";

const useStyles = makeStyles(() => ({
    row: {
        '&:hover': {
            background: "#eceff1",
            cursor: "pointer"
        }
    }
}));
const UsersTable = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const usersArray = props.users;
    const pages = props.pages;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersArray.map((row) => (
                            <TableRow
                                className={classes.row}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => history.push(`/users/${row.id}`)}
                            >
                                <TableCell component="th" scope="row">
                                        {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pages pages={pages} fetch={props.fetch} activePage={props.activeUsersPage}/>
        </>
    );
}

export default UsersTable;