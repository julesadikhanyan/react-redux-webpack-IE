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
import {blueGrey} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    row: {
        '&:hover': {
            background: blueGrey[50],
            cursor: "pointer"
        }
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.info.light,
        color: theme.palette.getContrastText(theme.palette.info.light),
    },
    tableContainer: {
        minWidth: 500,
        marginTop: 20
    }
}));

const UserPostsTable = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const userPostsArray = props.userPosts;

    return (
        <>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
                            <TableCell className={classes.tableHeaderCell} align="right">Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userPostsArray.map((row) => (
                            <TableRow
                                className={classes.row}
                                key={row.id}
                                onClick={() => history.push(`/post/${row.id}`)}
                            >
                                <TableCell>
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