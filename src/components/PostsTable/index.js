import React from "react";
import {useHistory} from "react-router-dom";
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

import Pages from "../Pagination";

const useStyles = makeStyles(() => ({
    row: {
        '&:hover': {
            background: "#eceff1",
            cursor: "pointer"
        }
    }
}));

const PostsTable = (props) => {
    const classes = useStyles();
    const postsArray = props.posts;
    const pages = props.pages;
    const history = useHistory();

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
                        {postsArray.map((row) => (
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
            <Pages pages={pages} fetch={props.fetch} activePage={props.activePostsPage}/>
        </>
    );
}

export default PostsTable;