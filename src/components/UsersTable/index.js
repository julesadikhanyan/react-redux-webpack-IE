import React from "react";
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {blue} from "@material-ui/core/colors";

import Pages from "../Pagination";

const useStyles = makeStyles((theme) => ({
    row: {
        '&:hover': {
            background: blue[50],
            cursor: "pointer"
        }
    },
    tableContainer: {
        borderRadius: 15,
        minWidth: 600,
        marginTop: 10
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.info.light,
        color: theme.palette.getContrastText(theme.palette.info.light),
    }

}));
const UsersTable = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const usersArray = props.users;
    const pages = props.pages;

    return (
        <>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                            <TableCell className={classes.tableHeaderCell} align="right">Email</TableCell>
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
                                    <Typography>{row.name}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography>{row.email}</Typography>
                                </TableCell>
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