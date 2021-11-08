import React from "react";
import {Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";

import Pages from "../Pagination";

const PostsTable = (props) => {

    const postsArray = props.posts;
    const pages = props.pages;

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
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">
                                    <Link underline="hover" component={LinkRouter} to={`/post/${row.id}`}>
                                        {row.title}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pages pages={pages} fetch={props.fetch}/>
        </>
    );
}

export default PostsTable;