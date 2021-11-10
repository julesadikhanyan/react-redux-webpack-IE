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

const useStyles = makeStyles(() => ({
    row: {
        '&:hover': {
            background: "#eceff1",
            cursor: "pointer"
        }
    }
}));

const UserPostsTable = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const userPostsArray = props.userPosts;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userPostsArray.map((row) => (
                            <TableRow
                                className={classes.row}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => history.push(`/post/${row.id}`)}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">
                                    {row.title}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default UserPostsTable;