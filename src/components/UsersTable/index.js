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
const UsersTable = (props) => {
    const classes = useStyles();

    const history = useHistory();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell} align="right">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((row) => (
                        <TableRow
                            className={classes.tableBodyRow}
                            key={row.id}
                            onClick={() => history.push(`/users/${row.id}`)}
                        >
                            <TableCell>
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
    );
}

export default UsersTable;