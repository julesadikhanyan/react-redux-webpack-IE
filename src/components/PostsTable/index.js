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

import {blue} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        borderRadius: 15,
        minWidth: 600,
        marginTop: 10
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.info.light,
        color: theme.palette.getContrastText(theme.palette.info.light),
    },
    tableBodyRow: {
        '&:hover': {
            background: blue[50],
            cursor: "pointer"
        }
    }
}));

const PostsTable = (props) => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>ID</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="right">Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.posts.map((row) => (
                        <TableRow
                            className={classes.tableBodyRow}
                            key={row.id}
                            onClick={() => history.push(`/post/${row.id}`)}
                        >
                            <TableCell>
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
    );
}

export default PostsTable;