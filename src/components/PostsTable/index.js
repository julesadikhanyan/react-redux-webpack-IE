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
    TableRow, Typography
} from "@material-ui/core";

import Pages from "../Pagination";
import {blue} from "@material-ui/core/colors";

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

const PostsTable = (props) => {
    const classes = useStyles();
    const postsArray = props.posts;
    const pages = props.pages;
    const history = useHistory();

    return (
        <>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
                            <TableCell className={classes.tableHeaderCell} align="right">Title</TableCell>
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
                                    <Typography>{row.id}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography>{row.title}</Typography>
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